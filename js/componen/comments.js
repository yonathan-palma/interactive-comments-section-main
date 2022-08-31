import controls from "./controls.js";

const sectionComment = document.querySelector(".comments_container");

const mostarData = ()=>{ 

    //convertir texto en json
    let comentarios = JSON.parse(localStorage.getItem("comments"));
    let fragmenetDiv = document.createDocumentFragment();
    let btnControls;

    for (const key in comentarios) {
        
        btnControls = controls(comentarios[key]);
        const div = document.createElement("div");
        div.classList.add("comment", "d-flex", "col-12");
        let comment = `
            <div class="col-1">
                <div class="d-flex flex-column text-center score">
                    <button class="btn btnScore"><img src="images/icon-plus.svg" alt="+"></button>
                    <span>${comentarios[key].score}</span>
                    <button class="btn btnScore"><img src="images/icon-minus.svg" alt="-"></button>
                </div>
            </div>
            <div class="col-11">
                <header class="d-flex gap-3 align-items-center">
                    <img src="${comentarios[key].user.image.png}" class="img_user" alt="User">
                    <h2>${comentarios[key].user.username}</h2>
                    <time class="text">${comentarios[key].createdAt}</time>
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
            divReplies.classList.add("col-11", "d-flex", "flex-column", "gap-3", "border-start", "ms-auto");

            for (const clave in replies) { 
                btnControls = controls(comentarios[key].replies[clave]); 
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
}

export default mostarData;