# Arquitetura de Microservices

> Bounded context é a solução tecnica que você dá

> Um monolito é todos os subdomains na mesma base de código

# Gateway
> Um objeto que encapsula acesso a um sistema externo

--------------------------------------------------------------------------------

# ACL + Gateway

--------------------------------------------------------------------------------

# ORM + Repository

--------------------------------------------------------------------------------

# Event-Driven Architecture

## O que é uma transação?
Transação é a abstração de um conjunto de operações que devem ser tratada como
uma única unidade lógica, onde para ter sucesso, todas as suas operações devem
ser bem sucedidas ou serem desfeitas.

## ACID - Atomicity, Consistency, Isolation e Durability
> Uma forma comum de pensar em uma transação é pelo conceito ACIO, relacionando
a comandos executados em um banco de dados relacional

## ACID efinições:
    - Atomicity: Todos os comandos da transação são tratados como uma unidade,
    todos executam ou nenhum executa
    - Consistency: Respeitam as regras de consistência estabelecidas no modelo
    de dados por meio de constraints, cascades, triggers e a sua combinação
    - Isolation: Faz com que a transação não tenha interferência de outros
    comandos que estejam sendo executados em paralelo por outras transações
    Durability: Garante que uma vez conmitada o resultado da transação seja
    persistido de forma definitiva

Exemplo:
1. Upload de um vídeo em um canal do YouTube
- Verificação de direitos autorais
- Conversão para diferentes formatos
- Transcrição das legendas
- Notificação dos inscritos
- Atualização do algoritmo de busca
- Atualização dos algoritmos de recomendação

2. Compra de um produto em um e-commerce
- Processamento do pagamento
- Emissão da nota fiscal
- Expedição do estoque
- Solicitação de coleta
- Crédito de pontos de fidelização
- Geração de cupom de desconto para a próxima compra
Não deu certo emitir a NF, o que fazer?
Extorna o processo todo? Tenta novamente?
Depende do que for definido para o projeto

3. Finalização de uma corrida
- Cálculo da distância
- Cálculo da tarifa
- Processamento do pagamento
- Envio do comprovante da corrida
- Emissão da nota fiscal

> Quanto mais complexa e distribuída for a arquitetura, maiores são as chances
de alguma coisa dar errado e a resiliência é a capacidade de manter o
funcionamento e se recuperar de falhas

### Como ser resiliente?
É possível adotar padrões como Retry, Fallback ou até mesmo SAGA
    Retry: simplesmente realiza uma ou mais tentativas em um pequeno intervalo de
tempo, elas podem resolver problemas simples como perda de pacotes, oscilações
na rede e até mesmo um deploy fora de hora
    Fallback: ao se deparar com uma indisponibilidade faz a tentativa em outro
serviço, por exemplo, um grande e-commerce deve trabalhar com diversos
adquirentes de cartão de crédito para evitar indisponibilidades e até mesmo
bloqueios
    SAGA: é responsável pelo gerenciamento de uma transação de longa duração
por meio de uma sequência de transações locais

## Tipos de transações locais
    - Pivot Transaction: são transações go/no go, ou seja, a partir delas é
decidido se o fluxo de execução segue em frente ou é abortado
    - Compensable Transaction: são desfeitas caso a transação toda seja abortada
    - Retriable Transaction: tem uma garantia de execução e podem se recuperar
de uma possível falha ou indisponibilidade

SAGA Orquestado: existe uma lógica centralizada que faz a coordenação de cada
um dos passos

SAGA Coreografado: cada participante publica e trata eventos de forma
independente, decidindo como realizar a sua parte

Exemplo
Compensable Transaction
Checkout -> Order Placed -> Ao realizar compra o pagamento deve ser processado ->
Pivot Transaction
Process Payment -> Payment Approved
                -> Payment Rejected
    caso seja rejeitado, o pedido deve ser cancelado -> Cancel Order -> Order Cancelled
Retriable Transaction
Após o pagamento ser aprovado deve emitr a nota fiscal -> Generate Invoice ->
Invoice Genereated -> Com a note fiscal emitida o produto deve ser enviado ->
Dispatch Order -> Order Dispatched

> Uma arquitetura orientada a eventos, ou Event-Driven Architecture, é uma
solução para transações distribuídas em um ambiente de microservices tendo
baixo acoplamento, de forma assíncrona e sem a necessidade de um orquestrador

## O que é um evento?
> Os eventos são **fatos que aconteceram no domínio** e que podem ser um gatilho
para a execução de regras de negócio
Exemplos:
    - OrderPlaced
    - PaymentApproved
    - InvoiceGenerated
    - RideRequested
    - RideEnded
    - PositionUpdated


## Por que a fila é necessária?
> Não existem recursos suficientes disponíveis

Alguns tipos de plataforma de mensageria:
RabbitMQ, Kafka, AWS SQS, ActiveMQ, Google Pub/Sub, ZeroMQ, Pulsar

## Vantagens de adotar uma arquitetura orientada a eventos
    - Baixo acoplamento entre os use case dentro e fora de um bounded
    context
    - Tolerância a falha com capacidade para retomar o processamento do ponto
    de onde parou
    - Disponibilidade e escalabilidade mais alta
    - Menos custos com infraestrutura
## Desafios
    - Complexidade técnica mais alta
    - Lidar com a duplicação de eventos
    - Falta de clareza no workflow
    - Dificuldade em tratar e diagnosticar erros

--------------------------------------------------------------------------------

# SOLID - LSP

