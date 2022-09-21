import mostarData from "../componen/comments.js";

const getData = async(API)=>{
    try {
        if (localStorage.getItem("comments") == undefined) {
            let dataJson = await fetch(API);
            dataJson = await dataJson.json();
            let userJson = dataJson.currentUser;
            let commentsJson = dataJson.comments;

            commentsJson.forEach(comment => {
                comment.scoreUser = [];
                comment.replies.forEach(reply => reply.scoreUser = []);
            });
            
            localStorage.setItem("currentUser", JSON.stringify(userJson));
            localStorage.setItem("comments", JSON.stringify(commentsJson));
        }      
        mostarData();
    } catch (error) {
        console.log('%c Error en la solicitud', 'color:red');
    }
}

export default getData ;