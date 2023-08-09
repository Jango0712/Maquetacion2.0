let arrayPersonas = []
let nombre = document.getElementById("nombre")
let origen = document.getElementById("origen")
let destino = document.getElementById("destino")
let nPersonas = document.getElementById("nPersonas")
let fecha = document.getElementById("fecha")


const mostrarInformacion = (event) =>{
    
    let _nombre = nombre.value
    let _origen = origen.value
    let _destino = destino.value
    let _nPersonas = nPersonas.value
    let _fecha = fecha.value

    event.preventDefault()

    if(_nombre !== "" & _origen !=="" & _destino !=="" & _nPersonas !=="" & _fecha !==""){
        arrayPersonas.push(
            {
                "nombre":_nombre,
                "origen":_origen,
                "destino":_destino.toLowerCase(),
                "nPersonas":_nPersonas,
                "fecha":_fecha
            }
        )
        console.log(arrayPersonas)
    }else{
        alert("Rellene todos los campos")
    }

}

const filtrar = (event) =>{
    let lista = document.getElementById("lista")
    lista.innerHTML =""
    lista.innerHTML =`  <tr>
                            <th>Nombre</th>
                            <th>Origen</th>
                            <th>Destino</th>
                            <th>Nro personas</th>
                            <th>Fecha</th>
                        </tr>`
    arrayPersonas.filter((item) => item.destino == "canarias" | item.destino == "mallorca" |item.destino == "galicia").map(({nombre,origen,destino,nPersonas,fecha})=>lista.innerHTML += `
    <tr>
        <td>${nombre}</td>
        <td>${origen}</td>
        <td>${destino}</td>
        <td>${nPersonas}</td>
        <td>${fecha}</td>
    </tr>
    `)
    event.preventDefault()
}