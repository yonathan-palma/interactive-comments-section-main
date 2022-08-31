
const controls = (obj)=>{
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let btnControls;
    if (obj.user.username === currentUser.username) {
        btnControls = `<button class="btnControls delete">Delete</button><button class="btnControls edit">Edit</button>`;
    }else{
        btnControls = `<button class="btnControls reply">Reply</button>`;
    }
    return btnControls;
}

export default controls;