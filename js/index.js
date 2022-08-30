import getData from "./dataInit/dataInit.js";
import mostarData from "./componen/comments.js";
import newComment from "./componen/newComent.js";

const data = './js/data.json';
const response = await getData(data);

const btnComment = document.getElementById("comment");
btnComment.addEventListener("submit", newComment);

const btnList = document.querySelectorAll(".offcanvasli button");
let user = JSON.parse(localStorage.commeentAdd).currentUser;

btnList.forEach(element => {
    element.dataset.currentUser == user.username ? element.classList.add("current") : '';
})

mostarData(response);
