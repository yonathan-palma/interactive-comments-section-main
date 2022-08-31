import getData from "./dataInit/dataInit.js";
import mostarData from "./componen/comments.js";
import newComment from "./componen/newComent.js";
import changeUser from "./dataInit/changeUser.js";

const data = './js/data.json';

//comentar
const btnComment = document.getElementById("comment");
btnComment.addEventListener("submit", newComment);

//cambiar usuario actual
const btnChangeUser = document.querySelectorAll(".change_user");
let user = JSON.parse(localStorage.getItem("currentUser"));
btnChangeUser.forEach(item => item.addEventListener("click", changeUser));
btnChangeUser.forEach(element => {
    element.dataset.currentUser == user.username ? element.classList.add("current") : '';
})

const imgUser = document.getElementById("current_user");
imgUser.src = user.image.png;

getData(data);
mostarData();
