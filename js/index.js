import getData from "./dataInit/dataInit.js";
import mostarData from "./componen/comments.js";

const data = './js/data.json';
const response = await getData(data);

const btnComment = document.getElementById("comment");
const textComment = document.getElementById("textComment");

btnComment.addEventListener("submit", newComment);

function newComment(e){

    e.preventDefault();

    let comentarios = JSON.parse(localStorage.commeentAdd).comments;
    let user = JSON.parse(localStorage.commeentAdd).currentUser;

    let newComment = {
        id: comentarios.length + 1,
        content: textComment.value,
        createdAt: "1 month ago",
        score: 0,
        user: {
          image: { 
            png: `./images/avatars/image-${user.username}.png`, 
            webp: `./images/avatars/image-${user.username}.webp`
        },
          username: user.username
        },
        replies: []
    };
    
    comentarios.push(newComment);
    let newData = {
        currentUser: {...user},
        comments: [...comentarios]
    }

    mostarData(JSON.stringify(newData));
    textComment.value = "";
    
    
}

mostarData(response);


// console.log(template)



// console.log(initialState());