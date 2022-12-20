// const questionContainer = documento(dom).actionSurLeDocument(".class-séléctioner")
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const answer = document.querySelector("p");

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
  answer.style.visibility = "visible";
  answer.style.background = "green";
});

btn2.addEventListener("click", () => {
  answer.style.visibility = "visible";
  answer.style.background = "red";
});

/* Ordem de précedencia */
/* <div>, #id, .class, balise HTML */

/* Mouse events */

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  console.log(e);
});

// contiuation 7
