window.addEventListener("load", ()=> {
    cargarPeliculas()
})
// variable que controla la paginacion
let pagina = 1

let btnAnterior = document.querySelector(".btnAnterior")
let btnSiguiente = document.querySelector(".btnSiguiente")

btnAnterior.addEventListener("click", ()=>{
    if (pagina > 1){
        pagina-=1
        cargarPeliculas()
    }
    else if (pagina == 1){
        pagina = 500
        cargarPeliculas()
    }
});

btnSiguiente.addEventListener("click", ()=>{
    if (pagina < 500){
        pagina+=1
        cargarPeliculas()
    }
    else if (pagina == 500){
        pagina = 1
        cargarPeliculas()
    }

});
// funcion para cargar y mostrar las peliculas
const cargarPeliculas = async () =>{
    try {
        let respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b9a94172f9c737c5a57355dfb009d5d5&language=es-MX&page=${pagina}`)
        console.log(respuesta)
    } catch (error) {
        
    }
}