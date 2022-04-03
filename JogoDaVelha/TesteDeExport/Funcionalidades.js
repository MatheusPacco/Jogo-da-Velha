const TodosOsCamposDaVeia = document.querySelectorAll('.DivDaVeia') 
const CampoDeRound = document.querySelector('#round'); 

export default function LimparOJogo ()  {
    CampoDeRound.textContent = 1;   
    TodosOsCamposDaVeia.forEach((TodosOsCamposDaVeia) => {
        TodosOsCamposDaVeia.classList.remove('jogador1'); 
        TodosOsCamposDaVeia.classList.remove('jogador2'); 
    })
}