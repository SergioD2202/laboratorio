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

        //Manejo de errores del form

        if(mail.value==="" || pw.value==="" || cpw.value===""){
            alert("Error:no puede dejar campos vacíos")
            return
        }

        if(pw.value !== cpw.value){
            alert("Error:las contraseñas no son iguales")
            return
        }

        if(pw.value.length<6){
            alert("Error:la contraseña debe tener al menos 6 caracteres/numeros/expresiones")
            return
        }


        //Verificar si el correo ya está en la base de datos

        fd.append("correo",mail.value)
        fd.append("password",pw.value)
        const userExists = await sendData("checkuser.php",fd)
        const res = Number(userExists)

        if(res===1) {
            alert("lo sentimos, este usuario ya está creado")
            return
        }

        if(userExists==="Invalid") {
            alert("Ingrese su correo en el formato correcto, ejemplo: prueba@prueba.com")
            return
        }

        const createUser = await sendData("createuser.php",fd)

        if(createUser.slice(0,7)==="success") {
            alert("¡Su usuario ha sido creado!")
            window.location.href="login.html"
        }

        else alert("Algo salió mal, intente luego")

        


    } catch (error) {
        console.error(error)
    }
}