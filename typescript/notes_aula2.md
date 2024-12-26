Aula 2

Temos mais suporte a OO, permitindo uma implementação muito mais alinhada com
os princípios do SOLID e especialmente em projetos com regras de negócio mais
complexas.

Decorators ajudam muito na configuração de frameworks e bibliotecas.

--------------------------------------------------------------------------------

`tsconfig.json` -> centraliza todas as regras de análise estática e de
transpilação e é importante configurá-lo de forma adequada, conforme as
necessidades e políticas do projeto.

A opção **incremental** serve para habilitar a transpilação incremental, guardando
uma cache que agiliza futuras transpilações especialmente em projetos grandes.

A opção **target** define qual é a versão da linguagem JavaScript que será
utilizada como destino da transpilação.

A opção **module** é importante para definir o tipo de sistema de módulo que será
utilizado, sendo que os mais importantes são CommonJS ou os ES Modules,
lançado no ES6.

A opção **include** define quais são os diretórios que devem ser transpilados
pelo TS enquanto o **exclude** ignora um conjunto de diretórios.

A opção **outFile** é muito utilizada para projetos que rodam no browser
definindo um arquivo que vai concatenar todos os arquivos que foram 
transpilados.

A opção **outDir** é essencial já que define o diretório de armazenamento dos
arquivos transpilados.

--------------------------------------------------------------------------------
Types
Union Type

Diferença entre Type e Interface

// Modificadores de visibilidade

--------------------------------------------------------------------------------
Type checking
É possível configurar exatamente o comportamento das verificações refletindo as
políticas estabelecidas no projeto, assim como seria feito com qualquer outro
tipo de linter.
