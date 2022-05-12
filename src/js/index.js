/* 
    Quando clicar no pokémon da listagem temos que esconder o cartão
    do pokémon aberto e mostrar o cartão correspondente ao que foi
    selecionado na listagem.

    /precisamos criar duas variáveis no JS para trabalhar com 
    os elementos da tela.

    Para isso vamos precisar trabalhar com dois elementos
    1 - listagem
    2 - cartão pokémon

    vamos precisar trabalhar com um evento de clique feito pelo
    usuário na listagem de pokémon.

    - remover a classe aberto só do cartão que está aberto.
    - ao clicar em um pokémon da listagem pegamos o id desse pokémon para saber qual cartão mostrar.
    - remover a classe ativo que marca o pokémon selecionado.
    - adicionar a classe ativo no item selecionado.

*/

const listaSelecaoPokemons = document.querySelectorAll('.pokemon');
const pokemonsCard = document.querySelectorAll('.cartao-pokemon');

listaSelecaoPokemons.forEach(pokemon => {
    
    pokemon.addEventListener('click', () => {

        const cartaoPokemonAberto = document.querySelector('.aberto');
        cartaoPokemonAberto.classList.remove('aberto');

        const idPokemonSelecionado = pokemon.attributes.id.value;

        const cartaoPokemonParaAbrir = document.getElementById(`cartao-${idPokemonSelecionado}`); 
        cartaoPokemonParaAbrir.classList.add('aberto');

        const pokemonAtivoNaListagem = document.querySelector('.ativo');
        pokemonAtivoNaListagem.classList.remove('ativo');

        const novoPokemonAtivo = document.getElementById(idPokemonSelecionado);
        novoPokemonAtivo.classList.add('ativo');

    })
})






