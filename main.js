// console.log(pokemons) 
const contenedorCards = document.getElementById("contenedor_cards"); 
let cardsHTML = ""; 
for (let pokemon in pokemons) 
{
    cardsHTML += crearCards(pokemon); 
}

contenedorCards.innerHTML = cardsHTML;


function crearCards(pokemon) 
{
    let card = document.createElement('div');
    card.classList.add('card'); 

    let id = document.createElement('div');
    let name = document.createElement('p'); 
    let image = document.createElement('img'); 

    id.innerText = pokemons[pokemon].id; 
    name.innerText = pokemons[pokemon].name;
    image.src = pokemons[pokemon].image;

    card.append(id, name, image);

    return card.outerHTML; 
}