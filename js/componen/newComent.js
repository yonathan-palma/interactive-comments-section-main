import mostarData from "./comments.js";

function newComment(e){

    e.preventDefault();
    const textComment = document.getElementById("textComment");
    let comentarios = JSON.parse(localStorage.commeentAdd).comments;
    let user = JSON.parse(localStorage.commeentAdd).currentUser;

    let newComment = {
        id: comentarios.length + 1,
        content: textComment.value,
        createdAt: "1 month ago",
        score: 0,
        user: {
          image: { 
            png: `../images/avatars/image-${user.username}.png`, 
            webp: `../images/avatars/image-${user.username}.webp`
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

    localStorage.commeentAdd = JSON.stringify(newData);
    mostarData(JSON.stringify(newData));
    // scrollTop 
    textComment.value = "";  
}

export default newComment;