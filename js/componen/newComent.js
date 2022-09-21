import mostarData from "./comments.js";

function newComment(e){

    e.preventDefault();
    const textComment = document.getElementById("textComment");
    const container = document.querySelector(".comments_container");
    let comentarios = JSON.parse(localStorage.getItem("comments"));
    let user = JSON.parse(localStorage.getItem("currentUser"));

    let newComment = {
        id: comentarios.length + 1,
        content: textComment.value,
        createdAt: Date.now(),
        score: 0,
        scoreUser:[],
        user: {
          image: { 
            png: `images/avatars/image-${user.username}.png`, 
            webp: `images/avatars/image-${user.username}.webp`
        },
          username: user.username
        },
        replies: []
    };
    
    comentarios.push(newComment);

    localStorage.setItem("comments", JSON.stringify(comentarios));
    mostarData();
    container.scrollTop = container.scrollHeight; 
    textComment.value = "";  
}

export default newComment;