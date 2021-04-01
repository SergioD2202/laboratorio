import { fetchData } from "../requests/get.js"
import { sendData } from "../requests/post.js"
import { logOut, checkSessionInside as checkSession } from "../requests/session.js"
import {Paciente} from "../models/paciente.js"

checkSession("../requests/cSession.php","../start/login.html")


const btn = document.querySelector(".logout")

btn.addEventListener('click',function(){
    logOut()
})



const list = async ()=>{
    try {
        const container = document.querySelector(".list")
        const list = await fetchData("plist.php")

        container.innerHTML=""

        const arr = list.map(e=>new Paciente(e))

        for(let i=0;i<arr.length;i++){
            container.innerHTML+= arr[i].build()
        }

    } catch (error) {
        console.error(error)
    }
}

list()