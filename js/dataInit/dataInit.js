
const getData = async(API)=>{
    try {
        let dataComent = await fetch(API);
        let response = dataComent.text();
        return response;
    } catch (error) {
        console.log('%c Error en la solicitud', 'color:red');
    }
}

export default getData ;