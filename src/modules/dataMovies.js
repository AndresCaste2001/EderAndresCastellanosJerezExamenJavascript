const options = {
    method: 'GET',
    headers: {
        Headers: {
            "content-type": "application/json"
          }
    }
}
export const getPelicula = async(id)=>{
    try{
    let url = `https://search.imdbot.workers.dev/?q=${id}`
    let responder = await fetch(url, options);
    let result = await responder.json();
    console.log(result);
    } catch (error) {
      console.error('Ocurrió un error al obtener las peliculas:', error);
    }
  }