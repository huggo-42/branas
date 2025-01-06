# Domain-Driven Design - Modelagem Tática - Parte 1

se divide em duas partes
Strategic DDD: Context Map
Tactical DDD: Domain Model inside a Bounded Context

O que é um domínio?
O dominio e o problema, em termos de negócio, que o precisa ser resolvido
**independente da tecnologia que será utilizada**

"Domain experts should object to terms or structures that are awkward or
inadequate to convey domain understanding, developers should watch for
ambiguity or inconsistency by using the model-based language and not being
satisfied until the approach is complete and comprehensible"

A modelagem tática é utilizada para construir a camada de domínio.
**Ela acompanha a camada do Entities do Clean Architecture**

## Objetos de Domínio
- Entities <E>
Abstraem regras de negócio independentes, tem **identidade** e **estado**,
podendo sofrer mutação ao longo do tempo.

> Exemplos:
    Account: O passageiro ou motorista pode ter a sua conta bloqueada, a placa
do carro modificada, a senha redefinida
    Ride: Uma corrida pode ter o status em andamento ou finalizada, após ser
finalizada o valor da tarifa é atualizado

> Como gerar a identidade?
    Manualmente: O próprio usuário pode gerar a identidade da entidade, por
exemplo, utilizando o email ou um domento de identificação
    Aplicação: A aplicação pode utilizar um algoritmo para gerar a identidade
como um gerador de UUID
    Banco de dados: O banco de dados por meio de uma sequência ou outro tipo de
registro, centralizando a geração da identidade

> Como comparar?
    A comparação entre entites se dá pela identidade, sem levar em consideração
as suas características

## Value Objects <VO> (objeto que representa um valor)
Também contém regras de negócio independentes, no entanto **são identificados
pelo seu valor**, sendo imutáveis, ou seja, a mudança implica na sua
substituição.

> Exemplos:
    Code: Representa uma determinada regra de formação de um número
    Cpf: Garante que o número do documento é válido
    Dimension: Abstrai a largura, altura, profundidade e peso de um item
    Password: Representa uma senha
    Color: Uma cor no formato RGB
    Coord: A latitude e longitude
    Email: Representa um email
    Segment: Representa duas posições geográficas no tempo

## Domain Service <DS>
Realiza tarefas específicas do domínio, não tendo estado. É indicado quando a
operação que você quer executar não pertence a uma entity ou a um value object.

> Exemplos:
    DistanceCalculator: Pegando duas coordenadas retorna a distância
    FareCalculator: Calcula o valor de um segmento da corrida
    TokenGenerator: Gera um token de acordo com um email

Utilize em operações que envolvem múltiplos objetos de domínio.

Normalmente quando uma operação afeta múltiplos objetos de domínio, não
pertencendo a nenhum deles, ela deve ser descrita em um domain service.

Cuidado! Não crie serviços no lugar de entites e value objects, favorecendo
um modelo anêmico.

--------------------------------------------------------------------------------

# Domain-Driven Design - Modelagem Tática - Parte 2

Como é que agente define os relacionamentos entre os objetos de domínio?
    * A relação entre os objetos de domínio não é a mesma utilizada no banco
    de dados

## Aggregate <A>
Grupo de objetos de domínio (Account trás Name, Email, Cpf, CarPlate, Password)

> Grandes aggregates podem trazer desperdício de memória, além de sobrecarregar
o banco de dados sem necessidade já que nem sempre a camada de aplicação estará
interessada em utilizá-lo na íntegra.

> O desafio é balancear a preservação da invariância com o consume de recursos
(invariância -> estado interno)

Aggregate <A>
é um agrupamento, ou cluster, de objetos de domínio como entities e value
objects, estabelecendo os relacionamentos entre eles.

**Todas as operações são realizadas por meio da raíz, que é uma entity ou
aggregate root <AR>**

Quem lidera o aggregate de Account é Account
    Name, Cpf, Password, etc fazem parte do aggregate de Account

Ride não está em Position, nem Position em Ride, mas ainda sim são relacionados.
A relação entre aggregates se dá por **identidade**

- Boas práticas na criação de aggregates
    - crie aggregates pequenos
    - referencie outros aggregates por identidade

> Se estiver difícil de implementar o repositório, talvez o aggregate seja
muito grande e possa ser separado

ORM espelha o banco de dados
Aggregates espelha as regras de negócio em objetos

# Repositories
É uma extensão do domínio resopnsável por realizar a persistência dos
aggregates, separando o domínio da infraestrutura


Repository DDD vs. DAO
Um Repository lida com a persistência de um aggregate inteiro, enquanto um DAO
não tem uma granularidade definida
Repository lida com aggregate, DAO lida com tabela do banco

> A granularidade de um relatório é diferente da utilizada pelo aggregate e
renderizar relatórios a partir de repositories pode ser excessivamente complexo,
prefira a utilização de CQRS com a criação de consultas separadas

