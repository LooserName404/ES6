console.log("Async/Await");

async function getPokemons() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await response.json();
        console.log(data);
        return data.results.map(item => {
        console.log(item);
        });
    } catch (err) {
        console.warn(err);
    }
}

getPokemons();
