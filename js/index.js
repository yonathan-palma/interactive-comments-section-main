import getData from "./dataInit/dataInit.js";
import mostarData from "./componen/comments.js";
import newComment from "./componen/newComent.js";
import changeUser from "./dataInit/changeUser.js";
import { confirmDelete } from "./dataInit/deleteComment.js";

const data = './js/data.json';
getData(data);
mostarData();
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

const btnConfirDelete = document.getElementById("comfirDelete");
btnConfirDelete.addEventListener("click", confirmDelete);


const btnreply = document.querySelectorAll(".reply");
btnreply.forEach(item => item.addEventListener("click", ()=>{
    console.log("reply");
}))
