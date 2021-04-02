import { Examen } from "../models/examen.js"
import { Paciente } from "../models/paciente.js"
import { fetchData } from "../requests/get.js"
import { checkSessionInside as checkSession } from "../requests/session.js"
import { sendData } from "../requests/post.js"

checkSession("../requests/cSession.php","../start/login.html")

const div = document.getElementById("current")
const container = document.getElementById("list")

document.addEventListener("click",async function(e){
    try {
        const list = await fetchData("elist.php")
        const fd = new FormData()

        for(let i=1;i<=list.length;i++){
            if(e.target.classList.contains("change-"+i)) alert("Cambio-"+i)

            if(e.target.classList.contains("id-delete-"+i)) alert("Borrar-"+i)

        }
    } catch (error) {
        console.error(error)
    }
})

const show = async () =>{
    try {
        const emptyfd = new FormData()
        const data = await fetchData("loadpatient.php")

        const arr = data.map(e=>new Paciente(e,1))
        div.innerHTML=arr[0].readOnly()
    } catch (error) {
        console.error(error)
    }
}

show()

const list = async ()=>{
    try {
        let counter = 1
        const list = await fetchData("elist.php")

        container.innerHTML=""

        const arr = list.map(e=>{
            const ex = new Examen(e,counter)
            counter++
            return ex
        })

        for(let i=0;i<arr.length;i++){
            
            container.innerHTML+= arr[i].build()
            
        }
    } catch (error) {
        console.error(error)
    }
}

list()