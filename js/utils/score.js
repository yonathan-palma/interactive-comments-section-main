

function scoreAdd(){
    let indice = this.dataset.indice;
    let reply = this.dataset.replies;
    let spanScore = this.parentElement.querySelector("span");
    let comentarios = JSON.parse(localStorage.getItem("comments"));
    let user = JSON.parse(localStorage.getItem("currentUser"));

    if (reply === "no") {
        let index = comentarios.findIndex(element => element.id == indice);
        let scoreUser = comentarios[index].scoreUser.indexOf(user.username);
        if (scoreUser >= 0) {
            return;
        }
        comentarios[index].score = comentarios[index].score + 1;
        spanScore.textContent = parseFloat(spanScore.textContent) + 1;
        comentarios[index].scoreUser.push(user.username);
        this.disabled = true;
        this.parentElement.querySelector(".scoreRemove").disabled = false;
    }else if(reply === "yes"){
        let index = comentarios.findIndex((element) => {
            return element.replies.find(reply => reply.id ==indice);          
        });
        let indexReplies = comentarios[index].replies.findIndex(element => element.id == indice);
        let scoreUser = comentarios[index].replies[indexReplies].scoreUser.indexOf(user.username);
        if (scoreUser >= 0) {
            return;
        }
        comentarios[index].replies[indexReplies].score = comentarios[index].replies[indexReplies].score + 1;
        spanScore.textContent = parseFloat(spanScore.textContent) + 1;
        comentarios[index].replies[indexReplies].scoreUser.push(user.username);
        this.disabled = true;
        this.parentElement.querySelector(".scoreRemove").disabled = false;
        
    }
    localStorage.setItem("comments", JSON.stringify(comentarios));
}

function scoreRemove(){
    let indice = this.dataset.indice;
    let reply = this.dataset.replies;
    let spanScore = this.parentElement.querySelector("span");
    let comentarios = JSON.parse(localStorage.getItem("comments"));
    let user = JSON.parse(localStorage.getItem("currentUser"));

    if (reply === "no") {
        let index = comentarios.findIndex(element => element.id == indice);
        let scoreUser = comentarios[index].scoreUser.indexOf(user.username);
        if (scoreUser == -1) {
            return;
        }
        comentarios[index].score = comentarios[index].score - 1;
        spanScore.textContent = parseFloat(spanScore.textContent) - 1;
        comentarios[index].scoreUser.splice(scoreUser, 1);
        this.disabled = true;
        this.parentElement.querySelector(".scoreAdd").disabled = false;
    }else if(reply === "yes"){
        let index = comentarios.findIndex((element) => {
            return element.replies.find(reply => reply.id ==indice);          
        });
        let indexReplies = comentarios[index].replies.findIndex(element => element.id == indice);
        let scoreUser = comentarios[index].replies[indexReplies].scoreUser.indexOf(user.username);
        if (scoreUser == -1) {
            return;
        }
        comentarios[index].replies[indexReplies].score = comentarios[index].replies[indexReplies].score - 1;
        spanScore.textContent = parseFloat(spanScore.textContent) - 1;
        comentarios[index].replies[indexReplies].scoreUser.splice(scoreUser, 1);

        this.disabled = true;
        this.parentElement.querySelector(".scoreAdd").disabled = false;
        
    }
    localStorage.setItem("comments", JSON.stringify(comentarios));
}

export {scoreAdd, scoreRemove};