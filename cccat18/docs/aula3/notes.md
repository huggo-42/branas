
--------------------------------------------------------------------------------

Transaction Script

Organizes business logic by procedures where each procedure handles a single
request from the presentation.

--------------------------------------------------------------------------------

Domain Model

O que é Orientação a Objetos?
Distribuir a complexidade em diferentes objetos, prezando por alta coesão (SRP)
e baixo acoplamento (aumentar o encapsulamento).

importante:
    Restringir a visibilidade sobre a estrutura interna do objeto.
    Os objetos são responsáveis por garantir que seu estado interno é válido.
Ter Get para o que é público, sem expor o objeto inteiro.

--------------------------------------------------------------------------------

Repository

É um padrão que faz a mediação entre o Domain Model e o mecanismo de 
persistência.

fluxo: Pega um Domain Model (Account) perssiste e depois recupera.

--------------------------------------------------------------------------------

# Dependency Injection
    Injetar algo que veio de fora.

# Dependency Inversion Principle
    Módulos de alto nível não devem depender de módulos de baixo nível, devem
depender de abstrações.

Exemplo:
O módulo de alto nível Signup (`export default class Signup {`) não depende
da implementação do repository (`AccountRepository`) e sim do contrato.

```typescript
export default class Signup {
// Não é bacana ter no construtor porque
//      Quando muda o construtor quebra em todos lugares que usa ele (causando acoplamento direto)
constructor(readonly accountRepository: AccountRepository,
//             readonly mailerGateway: MailerGateway) {}
// melhor com o @inject
@inject("mailerGateway")
mailerGateway?: MailerGateway;

```

--------------------------------------------------------------------------------

Clean Architecture

"The center of your application is not the database, nor is it one more of the
frameworks you may be using. **The center of your application is the use cases
of your application**"
- Robert Martin

Devices, Web, DB, UI, External Interfaces
-> Controllers, Gateways, Presenters
-> Use Cases
-> Entities
or
Frameworks & Drivers -> Interface Adapters -> Application Business Rules
-> Enterprise Business Rules

## Use cases (Camada de aplicação, o hexagono)
Os use cases expõe o comportamento demandado pelos drivers (atores), e
orquestram as entidades e os recursos externos como banco de dados, APIs, Filas

## Entities
Entidades são responsáveis por abstrair as regras de negócio independentes,
que podem ser desde um objeto com métodos até mesmo um conjunto de funções

# Interface adapters (aplicação -> tecnologia)
Os interface adapters fazem a ponte entre os casos de uso e os recursos
externo.
    Tratamento de requisições e respostas HTTP, **lidando com parâmetros**.
    Acesso ao banco de dados, **todo o código SQL pertence à esta camada**
    Integração com uma API externa
    Escrita e leitura no sistema de arquivos
    Conversão de dados para formatos específicos como CSV e PDF

Clean arch deseja ser independente de tecnologia.

Por fim, os frameworks and drivers são o nível mais baixo de abstração, é a
interação com a tecnologia, com os componentes que realizam a conexão com o
banco de dados, as requisições HTTP, a interação com o sistema de arquivos ou
o acesso aos recursos do sistema operacional.

# Entry point
O **main** é o ponto de entrada da aplicação (HTTP, CLI, UI, Testes), é lá que
as fábricas e estratégias são inicializadas e as injeções de dependência são
realizadas durante a inicialização.

"When composing an applicatino from many loosely coupled classes, **the
composition shuold take place as close to the application's entry point as
possible**. The Main method is the entry point for most application types. The
Composition Root composes the object graph, which subsequently performs the
actual work of the application."

Composition Root: constroe as dependências e disponibiliza para o restante

==========================================
O repository não conhecem a implementação da DatabaseConnection, eles conhecem
o contrato.
Esse contrato faz parte da camada de interface adapters, que por inversão de
dependência chegou em DatabaseConnection
==========================================
AccountController é um interface adapter, a ponte com o mundo exterior é os
dois endpoints
==========================================

