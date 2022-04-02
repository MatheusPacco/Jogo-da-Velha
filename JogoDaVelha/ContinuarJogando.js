// 1º Sumir com o modal de vencedor
// 2º Atribuir o número de vitórias ao vencedor, sendo uma melhor de 3 ou 5 
// 3º Limitar o round de jogadas possíveis 

const PlacarJogadorUm = document.getElementById("Player1-Vitorias");
const PlacarJogadorDois = document.getElementById("Player2-Vitorias"); 
let VitoriasJogadorUm = parseInt(PlacarJogadorUm.textContent); 
let VitoriasJogadorDois = parseInt(PlacarJogadorDois.textContent); 

const ModalDeVitoriaUm = document.querySelector("#Jogador1-Ganhou");
const ModalDeVitoriaDois = document.querySelector("#Jogador2-Ganhou");

const TodosOsCamposDaVeia = document.querySelectorAll('.DivDaVeia') 
const CampoDeRound = document.querySelector('#round'); 

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

const PararDeJogar = function ()  {
    location.reload();    
}

const ContinuarJogo = function(Vencedor) { 
   Vencedor != 2 ? PlacarJogadorUm.textContent = VitoriasJogadorUm += 1 : PlacarJogadorDois.textContent = VitoriasJogadorDois += 1;
   ModalDeVitoriaDois.classList.remove("ativo");
   ModalDeVitoriaUm.classList.remove("ativo");

   LimparOJogo()
}

function LimparOJogo ()  {
    CampoDeRound.textContent = 1;   
    TodosOsCamposDaVeia.forEach((TodosOsCamposDaVeia) => {
        TodosOsCamposDaVeia.classList.remove('jogador1'); 
        TodosOsCamposDaVeia.classList.remove('jogador2'); 
    })
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////