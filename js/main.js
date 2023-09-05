/**
 * Mon premier JS
 * @author Nathan Génesta
 * @version 0.0.1
 * @since 2023.08.29
 */
"use strict";

// Récupère tous les paragraphes du document
let tabPara = document.querySelectorAll("p");
let btAjouter = document.querySelector("button.ajouter");
let txtArticle = document.querySelector("#article");
let ulArticle = document.querySelector("ul.articles");
// Affiche le contenu des variables dans la console
console.log(tabPara, btAjouter, txtArticle, ulArticle);
// Ecoute le click sur btAjouter
btAjouter.addEventListener("click", () => {
    ulArticle.innerHTML += "<li>" + txtArticle.value + "</li>";
    // Vide le champ texte
    txtArticle.value = "";
});

// Demande l'âge de visiteur
let age = prompt("Quel est ton âge ?");
// Transforme age en entier
age = parseInt(age);
// Si l'âge n'est pas un nombre => erreur
if(isNaN(age)) {
    alert("Entrer un nombre !");
} else {
    // Affiche l'âge du visiteur
    alert(`Tu as ${age} ans`);
}

