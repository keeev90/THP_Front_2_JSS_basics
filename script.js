// 1. Hello World !
function sayHello() {
  let answer = "";
  answer = prompt("Quel est ton prénom ?"); // balançe sur le navigateur une popup d'échange avec l'utilisateur avec une entrée possible (et éventuellement une valeur par défaut)
  console.log(`Bonjour ${answer} !`);
  alert(`Bonjour ${answer} ! 👋`); // balançe sur le navigateur une popup informative avec OK comme réponses possibles
}

sayHello();

// 2. Opérations & boucles

// 2.1 Calculs rapides
console.log(" ");

function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number-1);
  }
}

function Xfactor() {
  let answer = "";
  answer = prompt("🔥🔥🔥 Bienvenue sur Xfactor 🔥🔥🔥 Choisi un nombre entre 1 et 10.");
  while(answer < 0 || answer > 10) {
    console.log("Hop hop hop ! Choisi un nombre entre 1 et 10.");
    answer = prompt("Choisi un nombre entre 1 et 10");
  } 
  let number = Number(answer)
  console.log(`Le factoriel de ${number} est : ${factorial(number)}`);
  alert(`Le factoriel de ${number} est : ${factorial(number)}`); // balançe sur le navigateur une popup informative avec OK comme réponses possibles
}

Xfactor();

// 2.2 Pyramide de Mario
console.log(" ");

function MarioPyramid() {
  let answer = "";
  answer = prompt("Bienvenue dans ma super pyramide ! Combien d'étages veux-tu ? Choisi un nombre entre 1 et 10");
  while(answer < 1 || answer > 10) {
    console.log("Hop hop hop ! Choisi un nombre entre 1 et 10.");
    answer = prompt("Choisi un nombre entre 1 et 10");
  }
  
  let isSure = confirm("Tu confirmes ?"); // balançe sur le navigateur une popup de confirmation avec oui ou non comme réponses possibles

  let number = Number(answer);
  console.log("Voici ta pyramide : ");
  for(let floor = 1; floor <= number; floor++) {
    number_of_blanks = " ".repeat(number - floor);
    number_of_bricks = "#".repeat(floor);
    console.log(number_of_blanks + number_of_bricks);
  }
}

MarioPyramid()

// 3 Analyses de données

let isSure = confirm("Allez, on va faire un peu d'analyse de données. T'es chaud ? 🤓"); 

// 3.1. Startup Nation

const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
console.log(" ");

console.log("Liste des entrepreneurs nés dans les années 70 :");
for (let entrepreneur of entrepreneurs) {
  if (entrepreneur.year >= 1970 && entrepreneur.year <= 1979);
	console.log(entrepreneur.first + " " + entrepreneur.last);
}

// Sors une array qui contient le prénom et le nom des entrepreneurs ;
console.log(" ");

function SweetSeventies() {
  names_array = [];
  for (let entrepreneur of entrepreneurs) {
    names_array.push(entrepreneur.first + " " + entrepreneur.last);
  }
  console.log("Voici les entrepreneurs nés dans les années 70 :");
  console.log(names_array)
  alert(`Wahoo, quel beau cru ! Il y a ${names_array.length} entrepreneurs stars nés dans les années 70`);
  answer = prompt("Minute papillon ! C'est quoi ton blase déjà ?");
  names_array.unshift(answer)
  alert(`INCROYABLE 🤑, t'es en tête de liste petit cachotier : ${names_array} `);
}

SweetSeventies()

// Quel âge aurait chaque inventeur aujourd'hui ?
console.log(" ");

function AgeToday() {
  console.log("Aujourd'hui, les entrepreneurs auraient :");
  for (let entrepreneur of entrepreneurs) {
    let birthday_year = entrepreneur.year
    let year_now = 2021
    age_today = year_now - birthday_year
    console.log(entrepreneur.first + " " + entrepreneur.last + `: ${age_today} ans`);
  }
}

AgeToday()

// Trie les entrepreneurs par ordre alphabétique du nom de famille.
alert("Allez on zappe l'exo de tri par ordre alphabétique parce que je commence à avoir les neurones farçis (🥱) ... mais pour terminer on file à la bibliothèque !");

// 3.2. Bibliothécaire
console.log(" ");

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//Est-ce que tous les livres ont été au moins empruntés une fois ?
function beenBorrowed() {
  let count = 0
  console.log("Les livres ont-ils été empruntés au moins une fois ?");
  for (let book of books) {
    if (book.rented > 0) {
    count += 1;
    }
  }
  if (count === books.length) {
    console.log("Oui madame la bibliothécaire !");
  } else {
    console.log("Négatif !");
  }
}

beenBorrowed()

//Quel est livre le plus emprunté ?
console.log(" ");

most_rented_book = books[0].rented;
for (let book of books) {
  if (book.rented > most_rented_book) {
    most_rented_book = book;
    console.log(`Le livre le plus emprunté est ${book.title}`);
  }
}

//Quel est le livre le moins emprunté ?
console.log(" ");

least_rented_book = books[0].rented;
for (let book of books) {
  if (book.rented < least_rented_book) {
    least_rented_book = book;
    console.log(`Le livre le moins emprunté est ${book.title}`);
  }
}

//Trouve le livre avec l'ID: 873495 ;
console.log(" ");

let book_to_find = 873495
for (let book of books) {
  if (book.id === book_to_find) {
  console.log(`Le livre avec l'ID: 873495 est ${book.title}`);
  }
}

//Supprime le livre avec l'ID: 133712 ;
console.log(" ");

let book_to_delete = 133712
for (let book of books) {
  if (book.id === book_to_delete) {
  books.splice(books.indexOf(book), 1)
  console.log(`Le livre avec l'ID: ${book.id} a bien été supprimé`);
  }
}
console.log("La preuve, il n'est plus dans l'array, la bibliothécaire va gueuler champion...");
console.log(books);

//Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
alert("On zappe l'exo sur le tri par ordre alphabétique...");

function sayCiao() {
  alert("C'est finito, mais avant de partir je te propose un petit jeu de hasard. 🥳");
  answer = prompt("Choisi un nombre entre 0 et 5. Tu ne passes pas à la correction suivante tant que tu ne trouves pas..."); 
  while(answer != 0) {
    answer = prompt("PERDU. Try again !");
  } 
  alert("BRAVO ! Allez, ciao et bonne journée 👋");
}

sayCiao()
