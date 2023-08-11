

class Movie 
{
    title
    releaseYear
    nacionality 
    genre
    actors
    photo

    constructor(title, releaseYear, nacionality,genere, actors,photo)
    {
        this.title = title
        this.releaseYear = releaseYear
        this.nacionality = nacionality
        this.genre = genere
        this.actors = actors
        this.photo = photo
    }

    showAtribute()
    {  
        return  `Titulo:  ${this.title},
            Año:  ${this.releaseYear},
            Nacionalidad:  ${this.nacionality},
            Genero:  ${this.genre},
            Actores:  ${this.actors}
            photo  -  ${this.photo}
           `
    }
}
let moviesArr=[
    {
        title:" Avengers ",
        releaseYear: "Año realizado : 2010" ,
        nacionality:"Nacionalidad: EE.UU ",
        genre:"Genero: Accion ",
        actors:["Actores: Jose carlos - Jan Gomez - Edgar Ramirez"],
        photo:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87BB758D1B37CF9139645D17E74B8C59B9028601029DAAEC1EBC55F07D8CE028/scale?width=1200&aspectRatio=1.78&format=jpeg",
    },
    {
        title:" piratas del caribe",
        releaseYear:"Año realizado : 2007",
        nacionality:"Nacionalidad: EE.UU",
        genre:"Genero: Aventura ",
        actors:["Actores: Juan Jose - Jean Carlos - Jhonny Depp"],
        photo:"https://www.ecartelera.com/carteles/900/970/001_m.jpg",
    },
    {
        title:" Lucy ", 
        releaseYear:"Año realizado : 2014" ,
        nacionality:"Nacionalidad: EE.UU ",
        genre:"Genero: Accion ",
        actors:["Actores: Morgan freeman - Brat pitt - Scarlett"],
        photo:"https://pics.filmaffinity.com/Lucy-170037491-large.jpg",
    },
    {
        title:" Flash ", 
        releaseYear:"Año realizado : 2023" ,
        nacionality:"Nacionalidad: EE.UU ",
        genre:"Genero: Accion ",
        actors:["Actores: Ezra - Jesus Blanco - Miguel Molina"],
        photo:"https://www.lanacion.com.ar/resizer/OGigvOG6OyvUYBlWPvX_xb7stBE=/210x300/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/5BC35UX4PFDBRP3TZNIN7LFNGQ.png",
    }
]

function loadMovies (){
    let movies = document.getElementById("myMovies")
    movies.innerHTML=""

    for(let movie of moviesArr){
        movies.innerHTML +=`
        <div class="container_movies_actors">
            <img src="${movie.photo}" class="card_img_movie">
            <h1>${movie.title}</h1>
            <p >${movie.releaseYear}</p>
            <p>${movie.nacionality}</p>
            <p>${movie.genre}</p>
            <p>${movie.actors}</p>
        </div>
        `
    }
}loadMovies()

let infoMovie = [];

let clickBtn = document.getElementById("btnAddMovie")

clickBtn.addEventListener("click",() =>{

    let title = document.getElementById("title").value
    let year = document.getElementById("year").value
    let nacionality = document.getElementById("nacionality").value
    let genere = document.getElementById("genere").value
    let actor =document.getElementById("actor").value
    let urlImage = document.getElementById("urlImage").value

    let newMovie = {
        title:title,
        year: year,
        nacionality: nacionality,
        genere: genere,
        actors:actor,
        urlImage:urlImage
    }
    
    infoMovie.push(newMovie)

    let newM = "";

    for(let info of infoMovie){
        newM = `
        <div class="container_movies_actors">
            <img id="foto" src="${info.urlImage}" class="card_img_movie">
            <h1>${info.title}</h1>
            <p >${info.year}</p>
            <p>${info.nacionality}</p>
            <p>${info.genere}</p>
            <p>${info.actors}</p>
        </div>
        `
    };
   document.getElementById("myMovies").innerHTML += newM
})