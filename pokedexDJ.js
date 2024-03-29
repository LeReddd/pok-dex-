const pokemonListContainer = document.getElementById("pokemon-list");
const pokemonDetailsElement = document.getElementById("pokemon-details");

fetch("https://pokeapi.co/api/v2/pokemon?limit=151 ")
    .then(response => response.json())
    .then(data => {
        data.results.forEach(pokemon => {
            const pokemonName = pokemon.name;
            const pokemonUrl = pokemon.url;
            
          
            const listItem = document.createElement("div");
            listItem.style.display = "flex"; //
           
            const nameElement = document.createElement("span");
            nameElement.textContent = pokemonName;
            nameElement.style.cursor = "pointer";
            nameElement.style.marginRight = "10px";

         
            nameElement.addEventListener("click", () => afficherDetailsPokemon(pokemonUrl));

         
            listItem.appendChild(nameElement);

           
            fetch(pokemonUrl)
                .then(response => response.json())
                .then(pokemonData => {
                   
                    const spriteUrl = pokemonData.sprites.front_default;
                    if (spriteUrl) {
                    
                        const spriteElement = document.createElement("img");
                        spriteElement.src = spriteUrl;
                        spriteElement.alt = pokemonName + " sprite";
                        spriteElement.style.width = "50px"; //

                      
                        listItem.appendChild(spriteElement);
                    }
                })
                .catch(error => console.error("Erreur lors de la récupération du sprite : " + error));

           
            pokemonListContainer.appendChild(listItem);
        });
    })
    .catch(error => console.error("Erreur : " + error));

    function rechercherPokemonParId() {
        const pokemonIdInput = document.getElementById("pokemon-id").value;
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIdInput}`;
        
        fetch(pokemonUrl)
            .then(response => response.json())
            .then(pokemon => {
                afficherDetailsPokemon(pokemonUrl); 
            })
            .catch(error => {
                console.error("Erreur lors de la recherche du Pokémon par ID : ", error);
             
                pokemonDetailsElement.innerHTML = "<p>Pokémon non trouvé. Veuillez vérifier l'ID.</p>";
            });
    }
    

    function afficherDetailsPokemon(url) {
        fetch(url)
            .then((response) => response.json())
            .then((pokemon) => {
                pokemonDetailsElement.innerHTML = `
                    <h2>Nom:&nbsp;   ${pokemon.name}</h2>
                    <h2>Id: &nbsp;  ${pokemon.id}</h2>
                    <h2>Poids :&nbsp; ${pokemon.weight/10}kg</h2>
                    <h2>Taille:&nbsp;${pokemon.height/10}m</h2>
                    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"style="width: 120px;margin: 35px; background-color: rgba(255, 255, 255); padding: 20px; box-shadow: 0 0 10px rgb(0, 0, 0); ">
                    <p>HP : ${pokemon.stats[0].base_stat} |   Attack: ${pokemon.stats[1].base_stat} 
                    | Defense: ${pokemon.stats[2].base_stat} | SP Attack: ${pokemon.stats[3].base_stat} 
                    | SP Defense: ${pokemon.stats[4].base_stat}  | Speed: ${pokemon.stats[5].base_stat}</p>
                    
                `;
            })
            .catch((error) =>
                console.error("Erreur lors de la récupération des détails", error)
            );
    }