# Introdução

- TypeScript é um superset da linguagem JavaScript tornando ela mais poderosa
por meio de recursos como Tipagem Estática, Decorators, Tipos Genéricos, Tuplas,
Módulos, Classes Abstratas, Interfaces, Modificadores de Visibilidade, e mais.

É o futuro do JavaScript

TypeScript é transpilado para JavaScript.
- Diferença entre compilador e transpilador:
Enquanto o compilador tem como alvo o código de máquina, o transpilador converte
o código para uma outra linguagem de programação (source-to-source)

--------------------------------------------------------------------------------
# Como iniciar projeto com typescript
`yarn init -y`
`yarn add typescript`

Para rodar:
`npx tsc --init` -> cria os arquivos transpilados (bem bagunçado)
                 -> configurar destino dos arquivos transpilados em `outDir`
então: `npx tsc`

Melhor prática, em package.json:
`"scripts": {
  "main": "tsc && node dist/main"
}`
e depois:
`npm run main`

Forma que o Branas faz: (usa ts-node)
`yarn add ts-node`
então: `npx ts-node src/main.ts`

Coisa bacana: (nodemon (precisa do ts-node instalado))
`yarn add nodemon`
`npx nodemon src/main.ts`
ele monitora alterações no arquivo e roda novamente o projeto automaticamente

em produção usa geração de dist, para não ficar rodando o nodemon rs
