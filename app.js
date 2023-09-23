window.addEventListener("load", () => {
    cargarPeliculas()
})
// variable que controla la paginacion
let pagina = 1

let btnAnterior = document.querySelector(".btnAnterior")
let btnSiguiente = document.querySelector(".btnSiguiente")

btnAnterior.addEventListener("click", () => {
    if (pagina > 1) {
        pagina -= 1
        cargarPeliculas()
    }
    else if (pagina == 1) {
        pagina = 500
        cargarPeliculas()
    }
});

btnSiguiente.addEventListener("click", () => {
    if (pagina < 500) {
        pagina += 1
        cargarPeliculas()
    }
    else if (pagina == 500) {
        pagina = 1
        cargarPeliculas()
    }

});
// funcion para cargar y mostrar las peliculas
const cargarPeliculas = async () => {
    try {
        let respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b9a94172f9c737c5a57355dfb009d5d5&language=es-MX&page=${pagina}`)
        /* console.log(respuesta);*/
        if (respuesta.status == 200) {
            let datos = await respuesta.json()
            /*console.log(datos.results);*/
            let peliculas = "";

            datos.results.forEach(pelicula => {
                peliculas += `<div class="pelicula">
            <img class="poster" src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}"/>
            <h3 class="titulo">${pelicula.title}</h3>
            
            </div>`

                document.querySelector(".contenedor").innerHTML = peliculas;
            })
        } else if (respuesta.status == 404){
            console.log("error 404");
        }
    } catch (error) {
        console.log(error)

    }
}