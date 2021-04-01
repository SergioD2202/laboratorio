import { fetchData } from "../requests/get.js"
import { sendData } from "../requests/post.js"
import { logOut, checkSessionInside as checkSession } from "../requests/session.js"
import {Paciente} from "../models/paciente.js"

checkSession("../requests/cSession.php","../start/login.html")

var pacientes = 0

document.addEventListener("click",async function(e){
    try {
        const list = await fetchData("plist.php")
        const fd = new FormData()

    for(let i=1;i<=list.length;i++){
        if(e.target.classList.contains("id-"+i+"-enter")) {
            fd.append("id-p",list[i-1].id_paciente)
            fd.append("name-p",list[i-1].nombre)

            const post = await sendData("savepatient.php",fd)

            if(post=="1") window.location.href="current.html"
            else alert("oops")
        }

        if(e.target.classList.contains("id-"+i+"-delete")) {
            if(confirm("¿Está seguro que quiere borrar este paciente?")){
                fd.append("id-p",list[i-1].id_paciente)

                const deleted = await sendData("deletepatient.php",fd)

                if(deleted.charAt(0)=="1") window.location.href="list.html"

                else alert("oops")
            }
        }
    }
    
    } catch (error) {
        console.error(error)
    }
})


const btn = document.querySelector(".logout")

btn.addEventListener('click',function(){
    logOut()
})



const list = async ()=>{
    try {
        let counter = 1
        const container = document.querySelector(".list")
        const list = await fetchData("plist.php")

        container.innerHTML=""

        const arr = list.map(e=>{
            const p = new Paciente(e,counter)
            counter++
            return p
        })

        pacientes = arr.length

        for(let i=0;i<arr.length;i++){
            const el = document.createElement('div')
            el.className = "shadow p-3 m-5 rounded w-50 bg-light"
            el.innerHTML = arr[i].build()
            container.appendChild(el)
        }
    } catch (error) {
        console.error(error)
    }
}

list()