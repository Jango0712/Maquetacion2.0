 class Profesional
{
    name 
    age 
    weight 
    height 
    retired 
    nacionality
    numOscars 
    profession 
    photo

    constructor(name, age, weight, height, retired, nacionality, numOscars, profession, photo)
    {
        this.name = name
        this.age = age
        this.weight = weight
        this.height = height
        this.retired = retired
        this.nacionality = nacionality
        this.numOscars = numOscars
        this.profession = profession
        this.photo = photo
    }

    value()
    {
        return `nombre  -  ${this.name},
                edad   -  ${this.age},
                peso  -  ${this.weight},
                altura  -  ${this.height},
                estaRetirado  -  ${this.retired},
                nacionalidad  -  ${this.nacionality},
                numeroDeOscars  -  ${this.numOscars},
                profesion  -  ${this.profession}
                photo  -  ${this.photo}`
                
    }
   
    
}
let actors=[
    {
        name:"ezra",
        age:"Edad: 25",
        weight: "Peso: 56",
        height: "Altura: 1.70" ,
        retired:"Esta retirado:  false",
        nacionality:"Nacionalidad:  Estadounidense ",
        numOscars:"Numero de oscars: 6",
        profession:"Profesion: actor ",
        photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6xuKs00E1Dk8pu2DDR6ztlMDJ3C1p5Me_SA&usqp=CAU"
    },
    {
        name:"jhony",
        age:"Edad: 56",
        weight: "Peso: 70",
        height: "Altura: 1.79" ,
        retired:"Esta retirado:  false",
        nacionality:"Nacionalidad:  Estadounidense ",
        numOscars:"Numero de oscars: 10",
        profession:"Profesion: actor ",
        photo:"https://people.com/thmb/jJpccRol6i3grtLhSIqv4BD4n64=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/johnny-depp-photocall-jeanne-du-barry-76th-cannes-film-festival-051723-3-9beb791bf4bb4448a50b10a97465d35e.jpg"
    },
    {
        name:"scarlett",
        age:"Edad: 43",
        weight: "Peso: 68",
        height: "Altura: 1.89" ,
        retired:"Esta retirado:  false",
        nacionality:"Nacionalidad:  australiana ",
        numOscars:"Numero de oscars: 1",
        profession:"Profesion: actriz",
        photo:"https://hips.hearstapps.com/hmg-prod/images/gettyimages-1665479798.jpg"
    },
]



function loadPage(){
    let actor = document.getElementById("actorsContainer")
    for(let act of actors){      
        actor.innerHTML +=`
        <div class="container_movies_actors">
          <img src="${act.photo}" class="card_img_actor">
          <h1>${act.name}</h1>
          <p >${act.weight}</p>
          <p>${act.height}</p>
          <p>${act.age}</p>
          <p>${act.retired}</p>
          <p>${act.nacionality}</p>
          <p>${act.profession}</p>
        </div>
        `
    }
}loadPage()








