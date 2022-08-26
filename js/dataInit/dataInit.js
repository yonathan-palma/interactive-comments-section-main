
const getData = async(API)=>{
    try {
        let dataComent = await fetch(API);
        
        //se devuelve en text
        let response = dataComent.text();
        return response;
    } catch (error) {
        console.log('%c Error en la solicitud', 'color:red');
    }
}

export default getData ;