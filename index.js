// const questionContainer = documento(dom).actionSurLeDocument(".class-séléctioner")
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

// questionContainer.style.borderRadius = "150px";

// questionContainer.addEventListener('événement', function)

// // questionContainer.addEventListener("click", () => {
//   console.log("click !");
// });

// questionContainer.addEventListener("actionDoUtilisator", () => {
//     reactionDeLaFunction.ao("clickOuSjaActionDeUtilisator !");
// })

// Chaque foi que en vas cliquer, sur la périmètre de la variable, dasn cet cas : questionContainer, ça vas décloncher
// la function, dans cet cas : console.log
// Compreension initial de la function: elle vas prendre la variable et lui donner une action especifique, dans cette cas, toggle : alternatce.
questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

/* Ordem de priorité no css. Um objeto  que contenha uma class e um id, eu em utilizo no JAVASCRIPT, a class,
o js podera nao reconhecer a class visto que na ordem de precedencia, o #id vem antes.
E plus puissant que tout ça cest "important!" */
/* <div>, #id, .class, balise HTML */

//-----------------------------------------------------------------//

/* Mouse events */

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translater(-50%, -50%)";
  mousemove.style.background = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//----------------------------------------------------

// KeyPress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

// Função responsavel pela chamada do son
// "a" de a.mp3(.mp3) não é nescessario na chamada do "src". o
// le son sera activé seleument par la touche "a"

const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();
};
// Função responsavel pour la recuperation de touche(recuper dans le document la touche
//appuer pour le utilateur) changement de coulour parcial do background en reponse à l'action de appuyer sur les toucheshjjjk
document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "red";
  }
  if (e.key === "z") ring(e.key);
});

//---------------------------------------
// Scroll Event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//-------------------------------
//Form Events

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

//inserção de balisa HTML, con js, innerHTML
// preventDefault, pour se premonir contre les comportament par default
//do navegateur
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Langage préféré : ${language}</h4>
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});
//----------------------------------------
// Load event

window.addEventListener("load", () => {
  console.log("Document chargé !");
});
//---------------------------------------
//For each (pour chaqun/ex. ammener tous les buttons au même endroit)

const boxes = document.querySelectorAll(".box");

console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7";
  });
});
//-----------------------------------------------
//addEdventListener Vs onclick
// document.body.onclick = function () {
//   console.log("Click !");
// };

//Bublbing => Montrer à la fin(de base l'eventlister est paramétré en mode Bublbing. Permet de changer l'ordre de les evénements pour l'utilisateur)
document.body.addEventListener(
  "click",
  () => {
    console.log("click 1 !");
  },
  false
);

//Usecapture
document.body.addEventListener(
  "click",
  () => {
    console.log("click 2 !");
  },
  true
);

//----------------------------------------
// Stop propagation
// Utilizer par exemple, dans les sites informatives, où
// pour accéder le contenu nous est presenter une fenêtre d'abonnement.
// Autrement dit, pour condicitoner le utilasateur a execute une action,
// avant de acceder le contennu suivant. Ideale avec le : Usecapture/Bubling

//StopPropagation, contre le click 1 no questionContainer

//
// ----------------------------
// BOM
//console.log(window.innerHeigt);
//console.log(window.srollY);
//window.open("http://google.com", "cours js", "height=600, width=800");

//confirm

btn2.addEventListener("click", () => {
  confirm("Voulez vous vraiment vous tromper ?");
});
btn1.addEventListener("click", () => {
  let answer = prompt("Entrez votre nom !");

  questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
});

//setTimeout (commpteur à rebours)
//Temps em milleseconds avant  de déclancher une action
setTimeout(() => {
  questionContainer.style.borderRadius = "300px";
}, 2000);

//setInteval et clearInterval

//let intervale = setInterval(() => {
//  document.body.innerHTML += `
//  <div class='box'>
// <h2>Nouvelle Boite !</h2>
//  </div>
//  `;
//}, 1000);

document.body.addEventListener("click", (e) => {
  console.log(e.target);
  clearInterval(intervale);
});

//remove(deletando div's et n'en importe quelle objet DOM/BOM)

document.body.addEventListener("click", (e) => {
  e.target.remove();
  clearInterval(intervale);
});
