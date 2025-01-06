Clean Code e Clean Architecture

typescript + postgres + rabbitmq + docker

--------------------------------------------------------------------------------
# Refactoring e Code Smells

"Alteração feita na estrutura interna do software para torná-lo mais fácil de
ser entendido e menos custoso de ser modificados, **sem alterar o seu
comportamento observável**" - Martin Fowler

book: Extreming programming

# smells:
- Nomes estranhos de variáveis, métodos e classes
- Números mágicos
- Comentários
- Código morto
- Linhas em branco
- Código duplicado
- Variável declarada longe da utilização
- Condições confusas
- Falta de tratamento de exceções

Introduzir variáveis explicativas

--------------------------------------------------------------------------------

# Test-Driven Development e Técnicas de Refactoring

Given -> act -> assert

FIRST
F: fast
I: Independent
R: Repeatable
S: Self-validating (assert)
T: Timely

TDD é um método para construção de software.
1. Write a test that fails (red)
2. Make the code work (green)
3. Eliminate redundancy (refactor)

"TDD is a way of managing fear during programming" - Kent Beck

Three Laws of TDD
1. Você não pode escrever nenhum código até ter **escrito um teste que detecte
uma possível falha**.

2. Você não pode escrever mais testes de unidade do que o **suficiente para 
detectar a falha**.

3. Você não pode escrever mais código do que o **suficiente para passar nos
testes**.

- Robert C. Martin


