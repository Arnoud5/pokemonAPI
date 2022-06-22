function fetchData(url){
    const response = fetch(url)
    .then(res => res.json())
    return response;
}

async function getPokemon(){
        const data = await fetchData('https://pokeapi.co/api/v2/pokemon?offset=0&limit=30');
        const results = data.results
        for (let i = 0 ; i<results.length ; i++){
            let pokeName = results[i].name;
            let pokemonDetail = await fetchData(results[i].url)
            let pokeId =  pokemonDetail.id;
            let pokeType =  pokemonDetail.types[0].type.name
            let pokeSprites =  pokemonDetail.sprites.front_default
            displayPokemon(pokeId, pokeName, pokeType, pokeSprites)
        }
}

// need param id, name, type[0], sprites.front_default
function displayPokemon(id, name, type, sprites){
    const pokemonContainer = document.querySelector('.pokemon-container')
    const div = document.createElement('div')
    const img = document.createElement('img')
    const par = document.createElement('p')
    const par1 = document.createElement('p')
    let color;

    div.classList.add('box');
    switch(type){
        case('grass'):
            color = '#a6de8c';
            break;
        case('fire'):
            color = '#f4a786';
            break;
        case('water'):
            color = 'lightblue';
            break;
        case('bug'):
            color = '#f0cd94';
            break;
        case('normal'):
            color= '#f5f5f5';
            break;
        case('electric'):
            color= '#ffe880';
            break;
        case('ground'):
            color= '#e6b856';
            break;
        default:
            color= '#f2e3e3'
            break;
    }
    div.style['backgroundColor'] = color;
    div.style['padding'] = '5px';
    div.style['border-radius'] = '10px';
    img.setAttribute('src', sprites);
    par.innerHTML = `${id} | ${name}`;
    par1.innerHTML = type;

    pokemonContainer.appendChild(div);
    div.appendChild(par)
    div.appendChild(img)
    div.appendChild(par1)
    
}