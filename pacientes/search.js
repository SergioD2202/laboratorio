import { Paciente } from "../models/paciente.js"
import { fetchData } from "../requests/get.js"
import { sendData } from "../requests/post.js"

const div = document.querySelector(".test")

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