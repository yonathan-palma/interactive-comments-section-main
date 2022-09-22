import controls from "./controls.js";
import { deleteComment } from "../utils/deleteComment.js";
import replyComment from "./replyComment.js";
import { editComment } from "./editComment.js";
import fromNow from "../utils/fromNow.js";
import { scoreAdd, scoreRemove} from "../utils/score.js";

const sectionComment = document.querySelector(".comments_container");

const mostarData = ()=>{ 

    //convertir texto en json
    let comentarios = JSON.parse(localStorage.getItem("comments"));
    comentarios = comentarios.sort((a,b)=> a.score < b.score ? 1 : -1);
    let fragmenetDiv = document.createDocumentFragment();
    let btnControls;

    for (const key in comentarios) {
        
        btnControls = controls(comentarios[key]);
        const div = document.createElement("div");
        div.classList.add("comment", "d-flex", "col-12");
        let comment = `
            <div class="col-1">
                <div class="d-flex flex-column text-center score">
                    <button class="btn btnScore scoreAdd" data-replies="no" data-indice="${comentarios[key].id}" data-user="${comentarios[key].user.username}">
                        <img src="images/icon-plus.svg" alt="+">
                    </button>
                    <span>${comentarios[key].score}</span>
                    <button class="btn btnScore scoreRemove" data-replies="no" data-indice="${comentarios[key].id}" data-user="${comentarios[key].user.username}">
                        <img src="images/icon-minus.svg" alt="-">
                    </button>
                </div>
            </div>
            <div class="col-11">
                <header class="d-flex gap-3 align-items-center">
                    <img src="${comentarios[key].user.image.png}" class="img_user" alt="User">
                    <h2>${comentarios[key].user.username}</h2>
                    <p class="text">${fromNow(comentarios[key].createdAt)}</p>
                    <div class="controls">${btnControls}</div>
                    
                </header>
                <p class="text mt-3">${comentarios[key].content}</p>
            </div>
        `;
        div.innerHTML = comment;
        fragmenetDiv.appendChild(div);
        
        let replies = comentarios[key].replies;
        if (replies.length > 0) {
            const divReplies = document.createElement("div");
            divReplies.classList.add("col-12", "col-md-11", "d-flex", "flex-column", "gap-3", "border-start", "ms-auto");

            for (const clave in replies) { 
                btnControls = controls(comentarios[key].replies[clave]); 
                divReplies.innerHTML += `
                    <div class="comment d-flex col-11 ms-auto">
                        <div class="col-1">
                            <div class="d-flex flex-column text-center score">
                                <button class="btn btnScore scoreAdd" data-replies="yes" data-indice="${replies[clave].id}" data-user="${replies[clave].user.username}">
                                    <img src="images/icon-plus.svg" alt="+">
                                </button>
                                <span>${replies[clave].score}</span>
                                <button class="btn btnScore scoreRemove" data-replies="yes" data-indice="${replies[clave].id}" data-user="${replies[clave].user.username}">
                                    <img src="images/icon-minus.svg" alt="-">
                                </button>
                            </div>
                        </div>
                        <div class="col-11">
                            <header class="d-flex gap-3 align-items-center">
                                <img src="${replies[clave].user.image.png}" class="img_user" alt="User">
                                <h2>${replies[clave].user.username}</h2>
                                <span class="text">${fromNow(replies[clave].createdAt)}</span>
                                <div class="controls">${btnControls}</div>
                            </header>
                            <p class="text mt-3"><span class="replyingTo">@${replies[clave].replyingTo}</span> ${replies[clave].content}</p>
                        </div>
                    </div>
                `;        
            } 
            fragmenetDiv.appendChild(divReplies);     
        }
    }
    sectionComment.innerHTML = "";
    sectionComment.appendChild(fragmenetDiv);

    //delete
    const btnDelete = document.querySelectorAll(".delete");
    btnDelete.forEach(item => item.addEventListener("click", deleteComment));

    //reply
    const btnReply = document.querySelectorAll(".reply");
    btnReply.forEach(btn => btn.addEventListener("click", replyComment));

    //adit 
    const btnEdit = document.querySelectorAll(".edit");
    btnEdit.forEach(btn => btn.addEventListener("click", editComment));


    // botonew de score
    let user = JSON.parse(localStorage.getItem("currentUser"));
    let btnScore = document.querySelectorAll(".btnScore");
    btnScore.forEach(btn => {
        if (btn.dataset.user == user.username) {
            btn.classList.add("own");
            btn.setAttribute("disabled", true);
            return
        }
        btn.classList.contains("scoreAdd") ? btn.addEventListener("click" ,scoreAdd) : btn.addEventListener("click" ,scoreRemove)
    });
    let own = document.querySelectorAll(".own");
    own.forEach(btn => btn.addEventListener("click", ()=>{console.log("no puedes es tuyo")}));

    
}

export default mostarData;