import { fetchData } from "../requests/get.js"
import { sendData } from "../requests/post.js"
import { logOut, checkSessionInside as checkSession } from "../requests/session.js"
import {Paciente} from "../models/paciente.js"

checkSession("../requests/cSession.php","../start/login.html")

var pacientes = 0

document.addEventListener("click",async function(e){
    try {
        const list = await fetchData("plist.php")

    for(let i=1;i<=list.length;i++){
        if(e.target.classList.contains("id-"+i+"-enter")) alert("entrar "+i)

        if(e.target.classList.contains("id-"+i+"-delete")) alert("borrar "+i)
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