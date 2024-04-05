
# Pokedex rendufinal markdown : 
<br> les questions </br>
1° Comment structurer une page HTML pour afficher une liste de Pokémon et un formulaire de
recherche ? 
<br> alors pour afficher une liste de pokémon : on fait un fetch avec l'api puis on demande avec un "INNERhtml" de pour chaque pokémon montrer leur nom , et un formulaire de recherche : on fait une page html avec une barre de recherche comme avec mon code en "onclick" avec un boutton qui renvoit a une fonction "rechercherparid" on la valeur de la barre de recherche puis on va dans l'api et on demande id de tout les pokémon puis quand on a marcher l'id du pokémon dans la barre de recherche on la fonction afficherunpokemon qui la fonction pour montrer les détails du pokémon. Il ne faut pas oublier de faire un catch si par exemple id est trop haut par rapport a la limite ou que le sprite marche pas  </br>

https://lereddd.github.io/pok-dex-/pokedexDJ

<br>jVoici mon programme html et css </br> 
 ```html 
 <!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-image: url("test2.png");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            margin-top: 0;
        }

        h1 {
            text-align: center;
            font-size: 70px;
            margin-top: 20px;
            background-image: url("test.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            height: 300px;
        }
        
        h2 {
            text-align: center;
            background-image: url("test3.png");
            background-repeat: no-repeat;
            background-position: center;
            height: px;
        }
        p {
            text-align: center;
            background-image: url("test3.png");
            background-repeat: no-repeat;
            background-position: center;
            height: px;
        }

        div {
            text-align: center;
            margin-top: 20px;
        }

        .bg {
            height: 5000px;
        }

        #pokemon-list {
            display: flex;
            flex-wrap: wrap;
            padding: 20px;
        }

        #pokemon-list div {
            width: 120px;
            margin: 35px;
            background-color: rgba(242, 14, 14, 0.919);
            padding: 20px;
            box-shadow: 0 0 10px rgb(255, 255, 255);
        }

        #pokemon-list div img {
            width: 60px;
            margin-top: 10px;
        }
        
    </style>
</head>
<body>

<div class="bg">
<h1>Pokédex</h1>    


<section id="search-form">

    <input type="text" id="pokemon-id" placeholder="Numéro du Pokémon">
    <button onclick= "rechercherPokemonParId()" >Rechercher</button>
</section>

<div id="pokemon-details"></div>
<div id="pokemon-list"></div>


<script src="pokedexDJ.js"></script>
</div>
</body>
</html>

 ```
<br> alors au début il y a la configuration html  </br> 
 ```html
 <!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
 ``` 
<br> puis je change et je met mon style css  </br> 
```css
<style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-image: url("test2.png");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            margin-top: 0;
        }

        h1 {
            text-align: center;
            font-size: 70px;
            margin-top: 20px;
            background-image: url("test.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            height: 300px;
        }
        
        h2 {
            text-align: center;
            background-image: url("test3.png");
            background-repeat: no-repeat;
            background-position: center;
            height: px;
        }
        p {
            text-align: center;
            background-image: url("test3.png");
            background-repeat: no-repeat;
            background-position: center;
            height: px;
        }

        div {
            text-align: center;
            margin-top: 20px;
        }

        .bg {
            height: 5000px;
        }

        #pokemon-list {
            display: flex;
            flex-wrap: wrap;
            padding: 20px;
        }

        #pokemon-list div {
            width: 120px;
            margin: 35px;
            background-color: rgba(242, 14, 14, 0.919);
            padding: 20px;
            box-shadow: 0 0 10px rgb(255, 255, 255);
        }

        #pokemon-list div img {
            width: 60px;
            margin-top: 10px;
        }
        
    </style>
```
<br> puis après je crèe ma div bg pour mon image puis mon titre </br> 
```html
<div class="bg">
<h1>Pokédex</h1> 
```
<br> puis je crée ma section "search-form" avec comme imput texte comme id pokemon-id </br>
<br>et dans espace réservé je met "Numéro du pokémon" </br> 
<br>puis j'ai mon boutton en "onclick" sur la fonction "rechercherparid"  </br>
```html
<section id="search-form">

    <input type="text" id="pokemon-id" placeholder="Numéro du Pokémon">
    <button onclick= "rechercherPokemonParId()" >Rechercher</button>
</section>
```

<br> puis je met mes div "pokemon-details" et "pokemon-list" qui seront les détails et la liste </br> 
puis je me transfert le code js "pokedexDJ.js" sur mon html  puis on va passer au js  
```sh
<div id="pokemon-details"></div>
<div id="pokemon-list"></div>   


<script src="pokedexDJ.js"></script>
</div>
</body>
</html>
```
<br>jVoici mon programme js </br> 
 ```js
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
 ``` 

<br> d'abord je vais défenir mes deux constante "pokemonListContainer" avec comme id "pokemon-list" et  "pokemonDetailsElement" "pokemon-details : </Br>
```js 
const pokemonListContainer = document.getElementById("pokemon-list");
const pokemonDetailsElement = document.getElementById("pokemon-details");
```
<br> Ensuite je vais aller chercher j'suis l'api les 151 premier pokémon pour eviter de surcharger mon site </Br>
puis j'attend la reponse pour chaque pokémon je demande leur nom et leur url 
```js 
fetch("https://pokeapi.co/api/v2/pokemon?limit=151 ")
    .then(response => response.json())
    .then(data => {
        data.results.forEach(pokemon => {
            const pokemonName = pokemon.name;
            const pokemonUrl = pokemon.url;
```
 const listItem = document.createElement("div");
           listItem.style.display = "flex"; //
 ```       
           const nameElement = document.createElement("span");
           nameElement.textContent = pokemonName;
           nameElement.style.cursor = "pointer";
           nameElement.style.marginRight = "10px";

        
           nameElement.addEventListener("click", () => afficherDetailsPokemon(pokemonUrl));

        
           listItem.appendChild(nameElement);

