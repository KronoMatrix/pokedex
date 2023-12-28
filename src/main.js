const url = "https://pokeapi.co/api/v2/pokemon/"

const searchInput = document.getElementById("search");
const pokedexContainer = document.getElementById("pokedex");

function showError(msg) {
    pokedexContainer.innerHTML = `<p class="error">${msg}</p>`;
    
}

async function searchPokemon() {
    
    const searchedPokemon = searchInput.value.toLowerCase();

    try {

        const response = await fetch(`${url}${searchedPokemon}`);
        

        if (!response.ok) {
            showError(`No se encontró ningún pokemon llamado:  ${searchedPokemon}`);
            return (0);
        }

        const data = await response.json();

        pokedexContainer.innerHTML = 
        `
            <h2>${data.name.toUpperCase()}</h2>
            <img src="${data.sprites.front_default}">
            <p>Numero: ${data.id}</p>
            <p>Altura: ${data.height / 10} mt</p>
            <p>Peso:   ${data.weight / 10} kg</p>
        `;

    } catch (error) {
        console.log(error);
        showError('Ha ocurrido un error al buscar el Pokémon');
    }
}

document.getElementById("btn-search").addEventListener("click", searchPokemon)