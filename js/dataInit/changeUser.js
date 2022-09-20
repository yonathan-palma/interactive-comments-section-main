import mostarData from "../componen/comments.js";

function changeUser(e){
    let user = this;
    const btnChangeUser = document.querySelectorAll("h2");
    btnChangeUser.forEach(item => item.classList.contains("current") ? item.classList.remove("current") : false);
  
    let newUser = {
      image: { 
        png: `./images/avatars/image-${user.dataset.currentUser}.png`,
        webp: `./images/avatars/image-${user.dataset.currentUser}.webp`
      },
      username: user.dataset.currentUser
    }
  
    let newData = {...newUser}
  
    const imgUser = document.getElementById("current_user");
    imgUser.src = newUser.image.png;
    localStorage.setItem("currentUser", JSON.stringify(newData)) ;
    mostarData();
    // user.classList.add("current");
    let you = document.querySelectorAll("h2");
    you.forEach(h2 => h2.textContent == newUser.username ? h2.classList.add("current", "d-flex", "gap-3") : '');
}

export default changeUser;