# SOLID - LSP (Liskov Substitution Principle)

"Se S (AxiosAdapter, FetchAdapter) é subclasse de T (HttpClient), então,
qualquer objeto do tipo T poderia ser substituído por objetos do tipo S,
SEM QUEBRAR O FUNCIONAMENTO/EXPECTATIVA DO PROGRAMA"


> vamos ter que padronizar os outputs?

Apenas definir uma subclasse, não implica em manter a coerência e a semântica
de funcionamento

Motivos para a quebra do princípio:
1. Precondições não podem ser fortalecidas na subclasse (eu esperava poder
utilizar localhost)
2. Poscondições não podem ser ENFRAQUECIDAS na subclasse (eu esperava um objeto
com .data e recebi sem...)
3. Invariância (estado interno), deve ser mantido e preservado (mudar a porta de
"3001" para "3010")

> As subclasses devem ser intercambiadas sem causar problemas durante a
execução do programa
- Barbara Liskov (ganhou um Turing Award)

--------------------------------------------------------------------------------

# SOLID - ISP (Interface Segregation)
A ideia aqui é criar interfaces com base nas necessidades de cada cliente,
evitando que ele dependa de métodos que ele não precisa mais utilizar.

--------------------------------------------------------------------------------

# CQRS
> Muito importante em domain model

## Sofrimentos reais
    - Relatório derrubando sistema (e o cliente segue dando F5)
    - Dashboard que leva mais de 3 minutos para abrir (ou que renderiza rápido
    para um cliente e é muito lento para outros)
    - Telas que exibem informações vindas de diferentes microserviços e
    apresentam muita latência para a obtenção dos dados

> Dominar SQL (entender como bancos funcionam) É MUITO IMPORTANTE, ORM atrapalha

## Normalização em um banco de dados serve para
    - Reduzir a duplicação de dados entre diferentes tabelas, otimizando a
    ocupação de disco e também o risco de atualizar uma informação em uma
    tabela e esquecendo das outras
    - Garantir a consistência nas operações realizadas sobre os dados
    - Permite a combinação criando projeções especificadas dependendo das
    necessidades

O CQRS, ou Command Query Responsability Segregation, foi muito conhecido pelo
Greg Young e envolve separar o modelo de mutação do modelo de consulta

"Because the term command is widely used in other contexts I prefer to refer to
them as modifiers, you also see the term mutators"
- Martin Fowler

Os comandos representam as transformações causadas pelas regras de negócio
## Comandos
    - Transferir dinheiro para uma conta bancária
    - Matricular um aluno em uma escola
    - Fazer uma compra online
    - Emitir uma nota fiscal
    - Reservar um quarto de hotal
    - Alugar um veículo
    - Contratar um seguro
As consultas apenas refletem o estado deixado pelas transformações já realizadas
## Consultas
    - Qual é o saldo da conta?
    - Quem são os dez vendedores que mais venderam em 2022?
    - Qual é a taxa de inadimplência?
    - Quantas parcelas estão atrasadas?
    - Quais alunos tiraram as maiores médias no segundo bimestre?
    - Quais são os produtos mais vendidos no mês passado?

O modelo é o conjunto de abordagens utilizadas para implementar o comando e a
consulta, desde o design até o banco de dados

## Como fazer para consumir dados distribuídos em um ambiente de microservices?
    - API Composition: A primeira forma é usando o padrão API Composition, ou
    seja, invocando cada uma das interfaces dos serviços distribuídos para
    obter os dados, acumulando tudo em memória

Base de leitura / Base réplica

## Soluções
    - Usar padrões de projeto diferentes para acessar o banco de dados: DAO
    vs. Repository
    - Criar snapshots para informações específicas como totalizadores (saldo de
    uma conta bancária, total de minutos assistidos por um aluno)
    - Ter tabelas de projeção com dados consolidados para leitura
    - Usar materialized views
    - Separar bancos de dados de gravação e leitura, podendo balancear a carga
    da leitura
    - Usar tipos de bancos de dados adequados para o propósito

## API Composition
Agregar a chamada de vários serviços

E como seria com CQRS?


