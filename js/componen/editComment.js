import controls from "./controls.js";
import mostarData from "./comments.js"

let comentarios = JSON.parse(localStorage.getItem("comments"));

const editComment = (e)=>{
    let reply = e.target.dataset.replies;
    let indice = e.target.dataset.indice;
    let btnContainer = e.target.parentElement;
    
    let update;

    let btnCancel = `<button type="button" class="btnControls cancel" data-replies="${reply}" data-indice="${indice}">X Cancel</button>`;
    btnContainer.innerHTML = btnCancel;
    
    const cancelButton = document.querySelectorAll(".cancel");
    cancelButton.forEach(btn => btn.addEventListener("click", cancelUpdate));

    if (reply === "no") {
        let index = comentarios.findIndex(element => element.id == indice);
        update = comentarios[index];
    }else if(reply === "yes"){
        let index = comentarios.findIndex((element) => {
            return element.replies.find(reply => reply.id ==indice);          
        });
        let indexReplies = comentarios[index].replies.findIndex(element => element.id == indice);
        update = comentarios[index].replies[indexReplies];
    }
    let container = btnContainer.parentElement.parentElement;
    container.querySelector("p").style = "display:none";
    let form = document.createElement("form");
    form.classList.add("form", "d-flex", "col-12", "flex-column", "gap-3", "p-3", "align-items-end", "needs-validation", "formUpdate");
    form.id = "updateComment"
    form.innerHTML = `
        <textarea name="" id="textComment" cols="30" rows="4" class="form-control" required>${update.content}</textarea>
        <button type="submit" data-replies="${reply}"  data-indice="${indice}" class="btn send">UPDATE</button>`;

    container.appendChild(form);

    const formUpdate = document.querySelectorAll(".formUpdate");
    formUpdate.forEach(form => form.addEventListener("submit", updateComment))

}

function cancelUpdate(e){
    let reply = e.target.dataset.replies;
    let indice = e.target.dataset.indice;
    let btnContainer = e.target.parentElement;
    let container = btnContainer.parentElement.parentElement;
    let btnComponent;
    let update;

    if (reply === "no") {
        let index = comentarios.findIndex(element => element.id == indice);
        update = comentarios[index]
        btnComponent = controls(update);;
    }else if(reply === "yes"){
        let index = comentarios.findIndex((element) => {
            return element.replies.find(reply => reply.id ==indice);          
        });
        let indexReplies = comentarios[index].replies.findIndex(element => element.id == indice);
        update = comentarios[index].replies[indexReplies]
        btnComponent = controls(update);
    }
    btnContainer.innerHTML = btnComponent;
    container.querySelector("form").remove();
    container.querySelector("p").style = "display:block";

    const btnEdit = document.querySelectorAll(".edit");
    btnEdit.forEach(btn => btn.addEventListener("click", editComment));
}

function updateComment(e){

    e.preventDefault();
    let form = e.target;
    let textComment = form.querySelector("textarea").value;
    let reply = form.querySelector("button").dataset.replies;
    let indice = form.querySelector("button").dataset.indice;
    
    if (reply === "no") {
        let index = comentarios.findIndex(element => element.id == indice);
        comentarios[index].content = textComment;
    }else if(reply === "yes"){
        let index = comentarios.findIndex((element) => {
            return element.replies.find(reply => reply.id ==indice);          
        });
        let indexReplies = comentarios[index].replies.findIndex(element => element.id == indice);
        comentarios[index].replies[indexReplies].content = textComment;
    }
    localStorage.setItem("comments", JSON.stringify(comentarios));
    mostarData();
}

export {editComment};