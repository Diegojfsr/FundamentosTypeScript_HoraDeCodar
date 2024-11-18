Vamos Comecar.

- Instalando o node.
- Abrindo o vsCode
- Verificando se o node esta instalado.
node -v
npm -v

- instalando o typescript globalmente
npm i -g typescript

- Verificar se o TS esta instalado corretamente
tsc -v 



@Clube Full-Stack funcionando
- comando para ver todos os pacotes npm instalados. *inclusive o typescript
npm list -g   

- desistalando o TS globalmente
npm uninstall -g typescript

- verificar a vesao do ts instalado
tsc --version   

- instalando o ts localmente
npm i -D typescript
npm i --save-dev typescript

- para rodar o tsc localmente
o tsc fica na pasta .bin, temos q entrar nela para o comando funcionar.
cd node_modules/.bin

- Ao inves de entrar na pasta usamos o comando 
npx tsc

- desistalando o tsc localmente
npm uninstall -D typescript
