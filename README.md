# pok-dex-
# Développement web : 
<u> javascript API fetch et json </u>
<br>javascript sert a dynamiser le logiciel </br> 
client lourd :
<br> logiciel avec icone
<br> 19 février 2024 </br>
 tout les ficher git sont dans un fichier non suivis , c'est nous qui vont le faire suivre 
 git init pour instaliser
 ```sh 
 git add /// 
 ```
 pour add un fichier dans git
 ```sh
 git commit
 ``` 
 pour valider les modif
 ```sh 
 git status
 ``` 
 pour verifier l'etat du dépot
 <br><b><a> faut lire le livre git avec : introduction , les base de git , les branche de git. Y'a aussi mdn web docs  le truc de mozila pour les developper  </a> </b>
 ne pas mettre de var parce que sa surpasse notre programme 
selectionner des elements 
par id 
```sh 
let element = document.getelementbyid("MonId");
```
Par classe:
```sh 
let elements = document.getElementsByClassName("maClasse");
```
Par Balise :
```sh 
let elements = documents.getelementBytagName("p");
```

Modifier des elements
changer le texte : 
```sh
document.getelementbyid("monId").TextContent = "Nouveau texte !";
```
changer le html interne : 
```sh
document.getElementbyid("monid").innerHTML = "<span> Nouveau contenu HTML </span>";
``` 
ecouter et réagir aux evenements 
<br> ajouter un ecouteur d'Evenements : </Br>
```sh
document.getElementsByID("monBouton").AddEventListener("click", function () {
alert ("Bouton cliqué !");     
}) ; 
```
