import mostarData from './comments.js';

let comentarios = JSON.parse(localStorage.getItem("comments"));
let user = JSON.parse(localStorage.getItem("currentUser"));
    
const addReplyComment = (e)=>{

    e.preventDefault();
    let form = e.target;
    let textComment = form.querySelector("textarea").value;
    let reply = form.querySelector("button").dataset.replies;
    let indice = form.querySelector("button").dataset.indice;

    let newReply = {
        id: `reply-${comentarios.length + 1}`,
        content: textComment,
        createdAt: "1 month ago",
        score: 0,
        replyingTo: user.username,
        user: {
          image: { 
            png: `../images/avatars/image-${user.username}.png`, 
            webp: `../images/avatars/image-${user.username}.webp`
        },
          username: user.username
        }
    };

    if (reply === "no") {
        let index = comentarios.findIndex(element => element.id == indice);
        comentarios[index].replies.push(newReply);
    }else if(reply === "yes"){
        let index = comentarios.findIndex((element) => {
            return element.replies.find(reply => reply.id == indice);          
        });
        comentarios[index].replies.push(newReply);
    }

    localStorage.setItem("comments", JSON.stringify(comentarios));
    mostarData();
}

const replyComment = (e)=>{
    
    let element = e.target.parentElement.parentElement.parentElement.parentElement;
    let indice = e.target.dataset.indice
    let reply = e.target.dataset.replies;
    let clases = ["form_section", "p-0"];
    let form = document.getElementById(`formReply-${indice}`);
    if (form) {
        form.parentElement.remove();
        return;
    }
    let section = document.createElement("section");
    reply === "yes" ? clases.push(...["col-11", "ms-auto"]) : '';
    section.classList.add(...clases);
    section.innerHTML=`
        <form action="" class="form d-flex col-12 mx-auto gap-3 p-3 align-items-start needs-validation formReply" id="formReply-${indice}">
            <img id="current_user" src="${user.image.png}" class="img_user" alt="User">
            <textarea name="" id="textComment" cols="30" rows="4" class="form-control" placeholder="Add a comment" required></textarea>
            <button type="submit" data-replies="${reply}" data-indice="${indice}" class="btn send">REPLY</button>
        </form>
    `;

    element.after(section);

    let formReply = document.querySelectorAll(".formReply");
    formReply.forEach(form => form.addEventListener("submit", addReplyComment))
}


export default replyComment;