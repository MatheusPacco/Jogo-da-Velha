window.onload = () => {
    const ConjuntoDeCampos = document.querySelectorAll('.DivDaVeia')

    ConjuntoDeCampos.forEach((ConjuntoDeCampos) => {
        ConjuntoDeCampos.addEventListener('click', event => {
            ConjuntoDeCampos.classList.add(DefinindoQuemJoga(ConjuntoDeCampos)) 
            /* executa o resultado, que à toda jogada avalia se um jogador ganhou ou não*/
            ValidandoAvelha() 
        })
    })

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
    /*Valindando queM irá jogar com base no round! e atribuindo um novo valor ao round*/ 

    DefinindoQuemJoga = (ConjuntoDeCampos) => {
    let RoundElemento = document.querySelector('#round'); 
    let RoundValor = parseInt(RoundElemento.textContent);  

        if (ConjuntoDeCampos.classList.length === 1) {
            if(RoundValor % 2 === 0) {
                RoundElemento.textContent = RoundValor + 1;  
                console.log("Jogador BOLINHA");
                return "jogador2"   
            } else { 
                RoundElemento.textContent = RoundValor + 1; 
                // FimDeJogo(RoundElemento.textContent)
                console.log("Jogador X");
                return "jogador1"  
            }
        }
    }

    ReferenciaPonto = (indice) => {
        let Referencia = ConjuntoDeCampos.item(indice).classList.item(1); 

        if (Referencia == "jogador1") {
            return 1;  
        }
        if (Referencia == "jogador2") {
            return 4; 
        }
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
    // TODAS AS POSSIBILIDADES DE VITÓRIA

    function ValidandoAvelha() {
        let Linha1 = null; 
        let Linha2 = null 
        let Linha3 = null;
        let DiagonalEsquerda = null ;
        let DiagonalDireita = null ; 
        let RetaEsquerda = null; 
        let RetaDoMeio = null;
        let RetaDireita = null; 
        let ConjuntoArray = []; 

        for (let indice = 0; indice < 9; indice++) {
            ConjuntoArray[indice] = ReferenciaPonto(indice) 

            if (indice == 0 || indice == 4 || indice == 8 ) {
                DiagonalEsquerda += ConjuntoArray[indice]
                Vitoria(DiagonalEsquerda)
            }

            if (indice == 2 || indice == 4 || indice == 6 ) {
                DiagonalDireita += ConjuntoArray[indice]
                Vitoria(DiagonalDireita)
            }

            if (indice == 0 || indice == 3 || indice == 6) {
                RetaEsquerda += ConjuntoArray[indice]
                Vitoria(RetaEsquerda)
            }

            if (indice == 1 || indice == 4 || indice == 7) {
                RetaDoMeio += ConjuntoArray[indice]
                Vitoria(RetaDoMeio)
            }

            if (indice == 2 || indice == 5 || indice == 8) {
                RetaDireita += ConjuntoArray[indice]
                Vitoria(RetaDireita)
            }
        }
        
        for (let index = 0; index < 3; index++) {
            Linha1 += ConjuntoArray[index] 
            Vitoria(Linha1)
        }

        for (let index = 3; index < 6; index++) {
            Linha2 += ConjuntoArray[index]
            Vitoria(Linha2)
        }

        for (let index = 6; index < 9; index++) {
            Linha3 += ConjuntoArray[index] 
            Vitoria(Linha3)
        }

        // A quantidade de pontos em cada ARRAY
        console.log (ConjuntoArray)
    }    
} // fim do windows ONLOAD
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

    const Vitoria = function(LinhaGeral) {
        if (LinhaGeral === 3) { ModalDeVencedor(1) }
        if (LinhaGeral === 12) { ModalDeVencedor(2) }
    }
    
    // const  FimDeJogo = function (roundFinal) { roundFinal == 10 ? LimpandoJogo() : null; }

    function reniciarOJogo() { 
        let RoundReset = document.querySelector('#round');
        const TodosOsCampos = document.querySelectorAll('.DivDaVeia')

        RoundReset.textContent = 1; 
        TodosOsCampos.forEach((TodosOsCampos) => {
            TodosOsCampos.classList.remove('jogador1'); 
            TodosOsCampos.classList.remove('jogador2'); 
        })
    }

    function ComecarOutroGame() { location.reload()}

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

    const ModalDeVencedor = function (jogador){
    const PlacarJogadorUmFinal = document.getElementById("Player1-Vitorias");
    const PlacarJogadorDoisFinal = document.getElementById("Player2-Vitorias"); 
    const ModalVitoriaFinal = document.getElementById("Modal-Vitoria"); 

    let VitoriasJogadorUm = parseInt(PlacarJogadorUmFinal.textContent); 
    let VitoriasJogadorDois = parseInt(PlacarJogadorDoisFinal.textContent); 
    let NomeDoJogadorGanhador = document.getElementById('NomeDoJogadorGanhador'); 
    let ModalDeVitoria1, ModalDeVitoria2, Encap; 

           
        if (VitoriasJogadorUm == 4) {
            NomeDoJogadorGanhador.textContent = "Jogador Azul" 
            return ModalVitoriaFinal.classList.add('ativo'); 
        }

        if (VitoriasJogadorDois == 4) {
            NomeDoJogadorGanhador.textContent = "Jogador Vermelho" 
            return ModalVitoriaFinal.classList.add('ativo'); 
        }
        

        if (jogador == 1) {
            ModalDeVitoria1 = document.querySelector("#Jogador1-Ganhou"); 
            ModalDeVitoria1.classList.toggle("ativo");
        }

        if (jogador == 2) {
            console.log("teste");
            ModalDeVitoria2 = document.querySelector("#Jogador2-Ganhou"); 
            ModalDeVitoria2.classList.toggle("ativo");
        }
    } 

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////


 