import mostarData from "../componen/comments.js";

function deleteComment(){
    let indice = this.dataset.indice;
    let replies = this.dataset.replies;
    
    let inputType = document.getElementById("type");
    let inputIndice = document.getElementById("indice");
    inputIndice.value = indice;
    inputType.value = replies;
    // this.parentElement.parentElement.parentElement.parentElement.remove();
}

function confirmDelete(){
    let comentarios = JSON.parse(localStorage.getItem("comments"));
    let inputType = document.getElementById("type").value;
    let inputIndice = document.getElementById("indice").value;
    if (inputType === "no") {
        let index = comentarios.findIndex(element => element.id === inputIndice);
        comentarios.splice(index, 1);
    }else if(inputType === "yes"){
        let index = comentarios.findIndex((element) => {
            return element.replies.find(reply => reply.id ==inputIndice);          
        });
        let indexReplies = comentarios[index].replies.findIndex(element => element.id == inputIndice);
        comentarios[index].replies.splice(indexReplies, 1);
    }
    localStorage.setItem("comments", JSON.stringify(comentarios));
    mostarData();
}

export {deleteComment, confirmDelete};