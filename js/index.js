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

const imgUser = document.getElementById("current_user");
imgUser.src = user.image.png;

const btnChangeUser = document.querySelectorAll(".change_user");
btnChangeUser.forEach(item => item.addEventListener("click", changeUser));

function changeUser(e){
  let user = this;
  btnChangeUser.forEach(item => item.classList.contains("current") ? item.classList.remove("current") : false);

  let comentarios = JSON.parse(localStorage.commeentAdd).comments;
  let userData = JSON.parse(localStorage.commeentAdd).currentUser;

  let newUser = {
    image: { 
      png: `./images/avatars/image-${user.dataset.currentUser}.png`,
      webp: `./images/avatars/image-${user.dataset.currentUser}.webp`
    },
    username: user.dataset.currentUser
  }

  let newData = {
    currentUser: {...newUser},
    comments: [...comentarios]
  }

  const imgUser = document.getElementById("current_user");
  imgUser.src = newUser.image.png;
  localStorage.commeentAdd = JSON.stringify(newData);
  mostarData(JSON.stringify(newData));
  user.classList.add("current");

}

mostarData(response);
