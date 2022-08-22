import getData from "./dataInit/dataInit.js";

const data = './js/data.json';
const sectionComment = document.querySelector(".comments_container");

const mostarData = async (data)=>{
    const response = await getData(data);
    localStorage.commeentAdd = response;
    let comentarios = JSON.parse(localStorage.commeentAdd);
    let fragmenetDiv = document.createDocumentFragment();
    let fragmenetReplies = document.createDocumentFragment();

    for (const key in comentarios.comments) {
        const div = document.createElement("div");
        div.classList.add("comment", "d-flex", "col-8");
        let comment = `
            <div class="col-1">
                <div class="d-flex flex-column text-center score">
                    <button class="btn btnScore"><img src="images/icon-plus.svg" alt="+"></button>
                    <span>${comentarios.comments[key].score}</span>
                    <button class="btn btnScore"><img src="images/icon-minus.svg" alt="-"></button>
                </div>
            </div>
            <div class="col-11">
                <header></header>
                <p>${comentarios.comments[key].content}</p>
            </div>
        `;
        div.innerHTML = comment;
        
        for (const clave in comentarios.comments[key].replies) {
            const divReplies = document.createElement("div");
            divReplies.innerHTML = `<p>${comentarios.comments[key].replies[clave].content}</p>`;
            div.appendChild(divReplies);
        }
        fragmenetDiv.appendChild(div);
    }
    // sectionComment.innerHTML = template ;
    sectionComment.appendChild(fragmenetDiv);
    return JSON.parse(localStorage.commeentAdd);   
}

let template = mostarData(data);

const comment_template = (template)=>{

}

// console.log(initialState());