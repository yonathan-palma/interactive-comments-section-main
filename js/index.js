import getData from "./dataInit/dataInit.js";

const data = './js/data.json';
const sectionComment = document.querySelector(".comments_container");

const mostarData = async (data)=>{
    const response = await getData(data);
    localStorage.commeentAdd = response;
    let comentarios = JSON.parse(localStorage.commeentAdd)
    let template = '';

    for (const key in comentarios.comments) {
        template += `
            <div class="comment col-8">
                <p>${comentarios.comments[key].content}</p>
            </div>
        `;
        
    }
    sectionComment.innerHTML = template ;
    return JSON.parse(localStorage.commeentAdd);   
}

let template = mostarData(data);

const comment_template = (template)=>{

}

// console.log(initialState());