
export const getPelicula = async(id)=>{
    try{
    let options = {
        method: 'GET',
        Headers: {
            "content-type": "application/json"
        }
    }
    let url = `https://search.imdbot.workers.dev/?q=${id}`
    let responder = await fetch(url, options);
    let result = await responder.json();
    let peliculas = [...result.description];
    console.log(peliculas)
    return (peliculas);
    
    } catch (error) {
      console.error('Ocurrió un error al obtener las peliculas:', error);
    }
  }
  export const getPeliculaAno = async(id)=>{
    try{
    let options = {
        method: 'GET',
        Headers: {
            "content-type": "application/json"
        }
    }

    let url = `https://search.imdbot.workers.dev/?q=${id}`
    let responder = await fetch(url, options);
    let result = await responder.json();
    let PeliculaOrdenada = result['#YEAR']
    PeliculaOrdenada.sort((a,b)=>
    b['#YEAR']- a['#YEAR']
    )
    return PeliculaOrdenada
    } catch (error) {
      console.error('Ocurrió un error al obtener las peliculas:', error);
    }
  }