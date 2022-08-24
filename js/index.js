import getData from "./dataInit/dataInit.js";

const data = './js/data.json';
const sectionComment = document.querySelector(".comments_container");

const mostarData = async (data)=>{
    const response = await getData(data);
    localStorage.commeentAdd = response;
    let comentarios = JSON.parse(localStorage.commeentAdd);
    let fragmenetDiv = document.createDocumentFragment();

    for (const key in comentarios.comments) {
        const div = document.createElement("div");
        div.classList.add("comment", "d-flex", "col-12");
        console.log(key);
        let comment = `
            <div class="col-1">
                <div class="d-flex flex-column text-center score">
                    <button class="btn btnScore"><img src="images/icon-plus.svg" alt="+"></button>
                    <span>${comentarios.comments[key].score}</span>
                    <button class="btn btnScore"><img src="images/icon-minus.svg" alt="-"></button>
                </div>
            </div>
            <div class="col-11">
                <header class="d-flex gap-3 align-items-center">
                    <img src="${comentarios.comments[key].user.image.png}" class="img_user" alt="User">
                    <h2>${comentarios.comments[key].user.username}</h2>
                    <time class="text">${comentarios.comments[key].createdAt}</time>
                    <button class="btnReply">Reply</button>
                </header>
                <p class="text mt-3">${comentarios.comments[key].content}</p>
            </div>
        `;
        div.innerHTML = comment;
        fragmenetDiv.appendChild(div);
        
        let replies = comentarios.comments[key].replies;
        if (replies.length > 0) {
            const divReplies = document.createElement("div");
            divReplies.classList.add("col-11", "d-flex", "flex-column", "gap-3", "border-start", "ms-auto");

            for (const clave in replies) {   
                divReplies.innerHTML += `
                    <div class="comment d-flex col-11 ms-auto">
                        <div class="col-1">
                            <div class="d-flex flex-column text-center score">
                                <button class="btn btnScore"><img src="images/icon-plus.svg" alt="+"></button>
                                <span>${replies[clave].score}</span>
                                <button class="btn btnScore"><img src="images/icon-minus.svg" alt="-"></button>
                            </div>
                        </div>
                        <div class="col-11">
                            <header class="d-flex gap-3 align-items-center">
                                <img src="${replies[clave].user.image.png}" class="img_user" alt="User">
                                <h2>${replies[clave].user.username}</h2>
                                <time class="text">${replies[clave].createdAt}</time>
                                <button class="btnReply">Reply</button>
                            </header>
                            <p class="text mt-3"><span class="replyingTo">@${replies[clave].replyingTo}</span> ${replies[clave].content}</p>
                        </div>
                    </div>
                `;        
            } 
            fragmenetDiv.appendChild(divReplies);     
        }
    }
    sectionComment.appendChild(fragmenetDiv);
    return JSON.parse(localStorage.commeentAdd);   
}

let template = mostarData(data);

const comment_template = (template)=>{

}

// console.log(initialState());