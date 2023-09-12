# Hexagonal
- é sobre separar 3 coisas: drivers, business rules e resources

# drivers
- são aquilo que permite que alguém interaja com a suas regras de negócio
    - uma API, um CLI, uma GUI, uma fila

# resources
- são aquilo que a suas regras de negócio utilizam
    - um banco de dados, um file system, uma API

> na aula 1 a gente misturou as regras de negócio com o acesso ao banco de
dados... nessa aula a gente aplicou Hexagonal e separou os conceitos, criando o
AccountDAO e RideDAO, separado do AccountService e RideService

> isso aumenta a testabilidade das regras de negócio em isolamento, ou seja, sem
os recursos... permitindo o uso de test patterns como stub, spy, mock e fake,
que também falamos ontem

> além disso, a separação do driver permite que você tenha drivers diferentes,
provavelmente alguém aqui já deve ter visto regra de negócio dentro do
Controller

> isso faz com que não seja possível testar as regras de negócio sem passar pelo
Controller ou mesmo variar o driver, por exemplo usando uma fila

## o objetivo principal do Alistair foi:
- article: https://alistair.cockburn.us/hexagonal-architecture/

![[motivation_pt1.png]]![[motivation_pt2.png]]
