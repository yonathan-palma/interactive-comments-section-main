
const controls = (obj)=>{
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let btnControls;
    if (obj.user.username === currentUser.username) {
        btnControls = `<button 
                        type="button" 
                        class="btnControls delete" 
                        data-replies="${obj.hasOwnProperty("replyingTo") ? "yes" : "no"}" 
                        data-indice="${obj.id}" 
                        data-bs-toggle="modal" 
                        data-bs-target="#delete">
                        Delete
                    </button>
                    <button 
                        class="btnControls edit"
                        data-replies="${obj.hasOwnProperty("replyingTo") ? "yes" : "no"}" 
                        data-indice="${obj.id}">
                        Edit
                    </button>`;
    }else{
        btnControls = `<button 
                        type="button" 
                        class="btnControls reply"
                        data-replies="${obj.hasOwnProperty("replyingTo") ? "yes" : "no"}" 
                        data-indice="${obj.id}">
                        Reply
                    </button>`;
    }
    return btnControls;
}

export default controls;