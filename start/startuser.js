import { checkSession, logIn } from "../requests/session.js";
import {sendData} from "../requests/post.js"

checkSession("../requests/cSession.php")

const btn = document.querySelector(".login")

btn.addEventListener("click",function(){
    startSession()
})


const startSession = async () => {
    try {
        const fd = new FormData()
        const mail = document.querySelector(".correo")
        const pwd = document.querySelector(".pass")

        fd.append("correo",mail.value)
        fd.append("password",pwd.value)
        const userExists = await sendData("checkuser.php",fd)
        const res = Number(userExists)

        if(res===0) {
            alert("lo sentimos, este usuario no existe")
            return
        }

        if(userExists==="Invalid") {
            alert("Ingrese su correo en el formato correcto, ejemplo: prueba@prueba.com")
            return
        }

        const passwordMatch = await sendData("checkpassword.php",fd)

        if(passwordMatch=="0") {
            alert("contraseña inválida, ingresela de nuevo")
            return
        }

        logIn(fd)

    } catch (error) {
        console.error(error)
    }
}