/* 
1- Clicar na seta de avançar, mudar a carta apresentada
    - pegar elemento HTML da seta avancar
    - identificar quando o usuário clicar na seta avançar
    - fazer a próxima carta aparecer (colocar o modo ' selecionado' nele)
    - esconder o cartão que estava aparecendo antes (tirar a classificação dele de 'selecioando')
2- Clicar na seta voltar e mudar a carta selecionada
    - pegar elemento HTML da seta voltar
    - identificar quando o usuário clicar na seta voltar
    - fazer a carta anterior aparecer (colocar o modo ' selecionado' nele)
    - esconder o cartão que estava aparecendo antes (tirar a classificação dele de 'selecioando')
*/

const btnAvancar = document.getElementById('btnAvancar');
const btnVoltar = document.getElementById('btnVoltar');
let cartaoAtual = 0;
const cartoes = document.querySelectorAll('.cartao'); //seleciona os cartões, pois todos possuem a classe cartão
    
function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao) {
    cartoes[indiceCartao].classList.add('selecionado'); // 1 é charizard, pq a lista começa em ZERO
}

btnAvancar.addEventListener('click', function() { // sempre que clicarem no btn-avancar, vai acontecer alguma coisa que fica dentro das chaves
    if(cartaoAtual === cartoes.length - 1) return;
    
    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener('click', function() {
    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});
