import getData from "./utils/dataInit.js";
import newComment from "./componen/newComent.js";
import changeUser from "./utils/changeUser.js";
import { confirmDelete } from "./utils/deleteComment.js";

const data = './js/data.json';
let from = await getData(data);

//comentar
const btnComment = document.getElementById("comment");
btnComment.addEventListener("submit", newComment);

//cambiar usuario actual
const btnChangeUser = document.querySelectorAll(".change_user");
let user = JSON.parse(localStorage.getItem("currentUser"));

btnChangeUser.forEach(item => item.addEventListener("click", changeUser));
let you = document.querySelectorAll("h2");
you.forEach(h2 => h2.textContent == user.username ? h2.classList.add("current", "d-flex", "gap-3") : '');


//img de usuarioactual
const imgUser = document.getElementById("current_user");
imgUser.src = user.image.png;

//eliminar comentario btn modal
const btnConfirDelete = document.getElementById("comfirDelete");
btnConfirDelete.addEventListener("click", confirmDelete);




