
// function manageResponse(resp){
//    const jSonResult = resp.json();
//    console.log(jSonResult);
//    return jSonResult;
// }
// function manageResult(result){
//     console.log(result);
// }
// fetch("./assets/data.json").then(manageResponse).then(manageResult);

// fetch("./assets/data.json")
// .then(resp => resp.json())
// .then(dataCallback)
// .catch(err => console.error(err))

// const bookContainer = document.getElementById("book-container");
// function dataCallback(data){
//     for (const book of data) {
//         console.log(book.title +"" + book.author);
//         bookContainer.innerHTML += "<p>titolo: "+ book.title + " , autore: "+ book.author + "</p>"
//     }
// }


//pokeapi
// fetch("https://pokeapi.co/api/v2/pokemon")
// .then(resp => resp.json())
// .then(pokemonCallback)
// .catch(err => console.error(err))

// function pokemonCallback(data){
// const pokemons = data.results;
// const pokeContainer = document.getElementById("pokemon-container");
// for (const pokemon of pokemons) {
//     const pokeP = document.createElement("p");
//     pokeP.appendChild(document.createTextNode(pokemon.name));
//     pokeContainer.appendChild(pokeP);
// }
// }


//yugioh api
fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0")
.then(resp => resp.json())
.then(yuGiOhCallback)
.catch(err => console.error(err))

function yuGiOhCallback(data){
    const yuGiOhCard = data;
    const cardYuGiOhContainer = document.getElementById("yuGiOh-container");
    for (const card of yuGiOhCard.data) {
        const cardP = `<div class="card-yuGiOh">
                        <div class= "card-name">${card.name}</div> 
                        <div class="card-type">[${card.type}]</div>
                        <div class="card-image">
                        <img src="${card.card_images[0].image_url_cropped}" alt="${card.name}">
                        </div>
                        <div class="card-desc">${card.desc}</div>
                        </div>`;
        cardYuGiOhContainer.innerHTML += cardP;
    }
    }



