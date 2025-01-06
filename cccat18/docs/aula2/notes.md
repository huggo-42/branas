SOLID - Single Responsability Principle (SRP)

"If a class has more then one responsability, then the responsabilities become
coupled and changes to one responsability may affect others.
A class should have only one reason to change."
- Robert C. Martin

--------------------------------------------------------------------------------

Arquitetura Hexagonal (Ports and Adapters)

"Allow an application to equally be driven by users, programs, automated test
or batch scripts, and to be developed and tested in isolation from its eventual
run-time devices (fs, db) and databases"
- Alistair Cockburn

--------------------------------------------------------------------------------

SOLID - Dependency Inversion Principle (DIP)

High-level modules shuold not depend on low-level modules, both should depend
on abstractions

--------------------------------------------------------------------------------

Tipos de testes automatizados (E2E, Integration, Unit)

--------------------------------------------------------------------------------

Test Patterns (Stub, Spy, Mock, Fake)

"Um test double é um padrão que tem o objetivo de substituir um DOC (depended-on
component) em um determinado tipo de teste por motivos de performance ou
segurança."

Dummy: Objetos que criamos apenas para completar a lista de parâmetros que
precisamos passar para invocar um determinado método.

Stubs: Objetos que retornam respostas prontas, definidas para um determinado
teste, por questão de performance ou segurança (exemplo: quando eu executar o
método fazer pedido preciso que o método pegar cotação do dólar retorne R$3,00)

Spies: Objetos que "espionam" a execução do método e armazenam os resultados
para verificação posterior (exemplo: quando eu executar o método fazer pedido
preciso saber se o método enviar email foi invocado internamente e com quais
parâmetros)

Mocks: Objetos similares a stubs e spies, permitem que você diga exatamente o
que quer que ele faça e o teste vai quebrar se isso não acontecer

Fake: Objetos que tem implementações que simulam o funcionamento da instância
real, que seria utilizada em produção (exemplo: uma base de dados em memória)

