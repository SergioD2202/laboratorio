import {fetchData} from "../requests/get.js"
import {sendData} from "../requests/post.js"


document.querySelector(".register").addEventListener("click",function(){
    createUser()
})

const createUser = async () => {
    try {
        const mail = document.querySelector(".mail")
        const pw = document.querySelector(".pass")
        const cpw = document.querySelector(".cpass")
        const fd = new FormData()

        fd.append("correo",mail.value)
        const req = await sendData("checkuser.php",fd)
        const res = Number(req)

        if(res===1) {
            alert("lo sentimos, este usuario ya está creado")
            return
        }

        else alert("bien! El usuario si está disponible")

        console.log("adieu")
    } catch (error) {
        console.error(error)
    }
}