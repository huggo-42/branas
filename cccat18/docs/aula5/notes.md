# Domain Events, Mediator e Observer (Um use case pode chamar o outro?)

Um use case pode chamar o outro?

## Mediator
Faz o **desacoplamento** de 2 ou mais objetos

## Domain Event
Use um evento de domínio para capturar a ocorrência de algo que aconteceu no
domínio

--------------------------------------------------------------------------------

# Solid OCP (open-closed principle)

Open Closed Principle
Aberto para extensão e fechado para modificação

## Factory
Move responsabilidades de criação de objetos para uma classe separada.

# É ruim usar md5 para senhas
Tem uma coisa chamada RainbowTable, alguem preprocessa um grande dicionário,
muitas possibilidades e se alguém rouba tua base de dados compara com esse
dicionário.
Soluções: decrypt, PBKDF2 que tem salt

--------------------------------------------------------------------------------

# Domain-Driven Design - Modelagem Estratégica (Domain, Subdomain, Bounded Context e Microservices)

## Open/Closed
Os componentes da arquitetura devem estar abertos para extensão e fechados
para modificação

### Big Ball of Mud

> A modelagem estratégica identifica e define as fronteiras entre os bounded
contexts
Se trata de como eu divido fisicamente o código

DDD tem 2 níveis, Stratégico e Tático (dominio complexo)

> Todo domínio pode e deve ser dividido em subdomínios

## Oque é domínio?
Problema que a organização resolve.
## Oque é subdomínio?
Área de conhecimento do domínio.

## Tipos de subdomínio

**Core ou Basic**: é o mais importante e que traz mais valor para empresa, é
onde você coloca seus maiores e melhores esforços

**Support ou Auxiliary**: complementa o core domain, sem eles talvez seja
difícil ter sucesso no negócio, mas você não precisa aplicar seus melhores
esforços nele

**Generic**: é um subdomínio que pode ser delegado para outra empresa ou mesmo
ser um produto de mercado

Exemplo:
E-Commerce
    - Catálogo de produtos (Core)
    - Carrinho de compras (Core)
    - Checkout (Core)

    - Avaliação dos produtos (Suporte)
    - Produtos favoritos (Suporte)

    - Processamento do pagamento (Genérico)
    - Emissão de nota fiscal (Genérico)
    - Gestão do estoque (Genérico)

Gateway de Pagamento
    - Gestão da recorrência (Core)
    - Integração com os adquirentes e bancos (Core)

    - Régua de cobrança para avisar do vencimento dos boletos (Genérico)

    - Análise antifraude (Genérico)

Gestão de financiamento imobiliário
    - Cálculo e provisionamento das parcelas (Core)
    - Análise de documentos (Core)

    - Simulaçào do financiamento (Suporte)

    - Assinatura digital dos contratos (Genérico)
    - Processamento do pagamento (Genérico)

Domain é o problema que a empresa resolve
Subdomain são as áreas de conhecimento
Bounded Context é a implementação do código em si

## Bounded Context
Uma forma de modularização de negócio que tem como objetivo reduzir o
acoplamento interno do código-fonte

A forma de interação entre cada bounded context dá origem ao **context map**

# Integration Patterns
Definem o relacionamento entre bounded contexts

Bounded context 1 --- Partners --- Bounded context 2
Partnership

## Shared Kernel (compartilha código, sdk)
Bounded context 1 uses Authorization model
Bounded context 2 uses Authorization model as well

Em termos mais técnicos, o código pode ser compartilhado por meio do
relacionamento direto em um monorepo ou algum tipo de biblioteca que deve ser
versionada e publicada internamente para que possa ser importada pelos outros
bounded contexts

> Crie um processo de gestão de depêndencia que não impacte a produtividade

## Customer/Supplier
Bounded context 1 ----U-----------D---- Bounded context 2
U: upstream (supplier)
D: downstream (customer)
ex: rest, grpc, graphql

> existe uma relaçãode fornecimento onde tanto o customer quanto o supplier
podem determinar como deve ser o contrato entre eles

## Conformist
Bounded context 1 <----U-----------D---- Bounded context 2

> Eu devo me "conformar" com o que ele fornece
> PagSegure me fornece a API, mas eu não consigo interagir e solicitar uma
alteração
> uma integração com API externa

O Bounded Context que tá fornecendo vai ter que ter um Open-Host

## Open-Host Service ---------
                             |                ________ Bounded context 2
                             ↓               /
                   ---------------          |
                   |     | PL v1 |←----------
Bounded context 1 -| OHS |-------|
                   |     | PL v2 |←----------
                   ---------------          |
                             ↑               \
                         published             ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ Bounded context 3
                         languages
ACL ao contrário, pode pegar coisas mais complexas de seu Bounded Context
e expor de forma mais simples

Um bounded context pode disponibilizar um conjunto de serviços utilizando um
protocolo padrão e com uma documentação abrangente para quem tiver interesse em
integrar

### Se a relação é de parceria, os dois lados estão alinhados e falam a mesma
linguagem
## Se for mista e não houver parceria, um se adequa ao outro

## Anti-Corruption Layer (ACL)
                          -------
Bounded context 1 ←-------| ACL |-Bounded context 2
                          -------
Bounded context 2 tem que fazer uma tradução, se não vai se contaminar com
toda informação que o Bounded context 1 enviar
Recebe - Traduz - bota pa dentro

> As relações conformistas geralmente exigem uma tradução para o domínio e isso
pode ser feito por meio de adaptadores importantes para inclusive permitir a
utilização de diferentes fornecedores (traduzir, se adequar)

> A fronteira do bounded context é uma excelente maneira de definir um
microservice

----------------       --------------------       -----------------
|    Analyze   | ----> |      Define      | ----> |   Identify    !
|    Domain    |       | Bounded Contexts |       | Microservices !
----------------       --------------------       -----------------


## Quais são as vantagens e desvantagens em ter uma arquitetura de microservices?
**Indepêndencia entre os serviços**
Indepêndencia entre as equipes de desenvolvimento

## Vantagens - Microservices
    - Diversidade tecnológica
    - Melhor controle sobre o débito técnico
    - Facilidade em acompanhar a evolução tecnológica (por conta de uma base
    de código menor)

## Desafios - Microservices
    - Transações distribuídas
    - Dificuldade em tratar e diagnosticar erros
    - Complexidade técnica mais alta

## Fazendo uma boa modelagem estratégica
    - Divisão da complexidade
    - Equipes menores
    - Reuso

## Comunicação assíncrona, Event-Driven Architecture, CQRS
    - Escalabilidade
    - Indepêndencia entre os serviços
    - Tolerância à falhas
    - Resiliência (sair de problemas)

> Para projetos menores com equipes pequenas, principalmente no início da
construção de um produto, é a arquitetura que dá mais resultado com o menor
esforço e custo de infraestrutura

# MonolithFirst
"As I hear stories about teams using a microservice architecture, I've notice
a commom pattern.
1. Almost all the successful microservice storeis have started with a monolith
that got too big and was broken up
2. Almost all the cases where I've heard of a system that was built as a
microservice system from scratch, it has ended up in serious trouble."
- Martin Fowler


