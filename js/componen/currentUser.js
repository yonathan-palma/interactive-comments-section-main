const btnList = document.querySelectorAll(".offcanvasli button");
let user = JSON.parse(localStorage.commeentAdd).currentUser;
console.log(user.username);

btnList.forEach(element => {
    element.dataset.currentUser == user.username ? element.classList.add("current") : '';
})