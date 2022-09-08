
const getData = async(API)=>{
    try {
        if (localStorage.getItem("comments") == undefined) {
            let dataJson = await fetch(API);
            dataJson = await dataJson.json();
            let userJson = dataJson.currentUser;
            let commentsJson = dataJson.comments;
            
            localStorage.setItem("currentUser", JSON.stringify(userJson));
            localStorage.setItem("comments", JSON.stringify(commentsJson));
            return {...currentUser, ...comments};
        }      
    } catch (error) {
        console.log('%c Error en la solicitud', 'color:red');
    }
}

export default getData ;