## Jogo-da-Velha
### Introdução 🎮
O projeto consiste em desenvolve um jogo web fazendo uso de <strong> HTML, CSS e, principalmente, de JavaScript.</strong>  
O jogo escohlido para ser desenvolvido foi o jogo da Velha, por ser uma brincadiera infatil, que todos as pessoas conhecem e quem apresenta regras bem simples de se entender, que influencia diretamente as funcionalidades e regras de negócio do jogo. 
<hr>

### Qual o propósito do desafio 🎓  
A criação de um jogo é um grande desafio, porque exige uma constância de interações realizadas pelo próprio usuário, sendo de suma importância que exista um tratamento de qualquer tipo de interação, já que qualquer tipo de erro pode acabar com a aplicação e, consequentimente, o usuário abandona o jogo e a experiência é arruinada. 

Como estou aprendendo a programar com JavaScript, se tornou muito conveniente desenvolver o jogo, justamente pela interação direta e constante com o HTML; qualquer interação teria que gerar um evento na tela, para que a jogabilidade se mantivesse. 
<hr>

### Regras de negócio 📜
 
- O primeiro a jogar sempre dese ser o Jogador 1 ( x ). 
- Todo jogador só poder jogar uma vez por round. 
    - O jogador não pode colocar sua forma no lugar do outro; sua forma sempre deve ser inserida em uma espaço vazio; 
- Ganha o jogador que conseguir fazer uma sequência de três formas iguais em linha reta ou diagonal. 
    - Caso nenhum dos jogadores consiga atingir esse objetivo, será possível resetar a prancheta de jogo para que os espaços fiquem vazios. 
- Quando um dos jogadores ganhar, deverá ser apresentando um modal mostrando qual os dos jogadores ganhou.
    - Caso os jogadores decidirem prosseguir com o jogo, será adicionado um ponto de vitória para o jogador vencedor; 
    - O número máximo de pontos de vitória por jogador é de 5 pontos. 
        - <strong> O Jogador que atingir esse valor de vitórias ganhará a partida. </strong> 
- Ao fim de cada vitória é possível que eles abandonem o jogo, e a partida será reniciada. 

<hr>

#### Figma - Design e Elementos UI da aplicação 🎨  

`- O Conceito geral da escolha estética`

O design do jogo foi pensado em trazer elementos visuais da estética de programação, como forma de criar uma familiarização com os desenvolvedores; em outras palavras, a minha fonte de inspiração foi a tela do <strong> Visual Studio Code </strong>

`- A Escolha tipográfica`

Seguindo o conceito explicado acima. A escolha tipografica foi a 'Consolas'. 

```
Basicamente porque se tata da tipografia padrão da Visual Studio. 
Sendo comum o uso de tipografias monospace nas IDES de codificação. 
Por ter essa característica diferente das tipografias normais, aqueles que já codificam a um tempo
com certeza vão sentir uma familiaridade. 
```
`- As telas do jogo!`

![Tela Preta do jogo da Velha](https://raw.githubusercontent.com/MatheusPacco/Jogo-da-Velha/main/Tela%20-%20Documentacao/Black%20Mode.png "Tela black mode Padrão do jogo")

![Modal do jogador AZUL quando ele ganha um round](https://raw.githubusercontent.com/MatheusPacco/Jogo-da-Velha/main/Tela%20-%20Documentacao/Frame%2013.png width="248px" "Modal do jogador azul quando ele ganha um round")
