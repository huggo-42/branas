# Test patterns

# Dummy
- objetos que criamos apenas para completar a lista de parâmetros que
  precisamos passar para invocar um determinado método.

# Stubs
- objetos que retornam respostas prontas, definidas para um determinado teste,
  por questão de performance ou segurança (ex: quando executar o método fazer
  pedido preciso que o método pegar cotação do dólar retorne R$3,00)

# Spies
- objetos que "espionam" a execução do método e armazenam os resultados para
  verificação posterior (ex: quando eu executar o método fazer pedido)

# Spies
- objetos que "espionam" a execução do método e armazenam os resultados para
  verificação posterior (ex: quando eu executar o método fazer pedido preciso
  saber se o método enviar email foi invocado internamente e com quais
  parâmetros)

# Mockes
- objetos similares a stubs e spies, permitem que você diga exatamente o que
  quer que ele faça e o teste vai quebrar se isso não acontecer

# Fake
- objetos que tem implementações que simulam o funcionamento da instância real,
  que seria utilizada em produção (ex: uma base de dados em memória)
