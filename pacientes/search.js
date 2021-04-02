import { Examen } from "../models/examen.js"
import { Paciente } from "../models/paciente.js"
import { fetchData } from "../requests/get.js"
import { checkSessionInside as checkSession } from "../requests/session.js"
import { sendData } from "../requests/post.js"

var sexo 
var sangre
var estado

checkSession("../requests/cSession.php","../start/login.html")

const div = document.getElementById("current")
const container = document.getElementById("list")

document.addEventListener("click",async function(e){
    try {
        const list = await fetchData("elist.php")
        const fd = new FormData()

        for(let i=1;i<=list.length;i++){
            if(e.target.classList.contains("change-"+i)){
                if(list[i-1].estado=="Pendiente") {
                    fd.append("id-e",list[i-1].id_examen)
                    fd.append("estado","Realizado")

                    const change = await sendData("changestate.php",fd)

                    if(change) window.location.reload()

                    else alert("oops")
                }
                else {
                    fd.append("id-e",list[i-1].id_examen)
                    fd.append("estado","Pendiente")

                    const change = await sendData("changestate.php",fd)

                    if(change) window.location.reload()

                    else alert("oops")

                }
            }

            if(e.target.classList.contains("id-delete-"+i)) {
                if(confirm("¿Está seguro que quiere borrar este examen?")){
                    fd.append("id-e",list[i-1].id_examen)
    
                    const deleted = await sendData("deleteexam.php",fd)
    
                    if(deleted.charAt(0)=="1") window.location.reload()
    
                    else alert("oops")
                }
            }

        }
    } catch (error) {
        console.error(error)
    }
})

document.getElementById('estado').addEventListener('change', function() {
    estado = this.value
  });

document.getElementById('sexo').addEventListener('change', function() {
    sexo = this.value
  });

document.getElementById('tiposangre').addEventListener('change', function() {
    sangre = this.value
  });

document.querySelector(".act").addEventListener("click", async function(){
    try {
        const name = document.querySelector(".n-nombre")
        const edad = document.querySelector(".n-edad")
        const fd = new FormData()

        if(name.value=="" || edad.value=="" || !sexo || !sangre || sexo=="Sexo" || sangre=="Tipo de Sangre") {
            alert("por favor llene todos los campos")
            return
        }

        if(Number(edad.value)<=0){
            alert("Error,edad debe ser positivo")
            return
        }

        if(!name.value.match(/^[A-Za-z]+$/)){
            alert("Solo se permiten letras del alfabeto en nombre")
            return
        }

        fd.append("n-name",name.value)
        fd.append("n-edad",edad.value)
        fd.append("n-sexo",sexo)
        fd.append("n-sangre",sangre)

        const post = await sendData("actpatient.php",fd)

        if(post.charAt(0)==="1"){
            alert("Paciente actualizado!")
            window.location.reload()
        }

        else alert("oops") 
        
    } catch (error) {

        console.error(error)
        
    }

    
})

document.querySelector(".crear").addEventListener("click", async function(){
    try {
        const tipo = document.querySelector(".n-tipo")
        const des = document.querySelector(".n-des")
        const fd = new FormData()

        if(tipo.value=="" || des.value=="" || !estado || sexo=="Estado") {
            alert("por favor llene todos los campos")
            return
        }

        if(!tipo.value.match(/^[A-Za-z]+$/)){
            alert("Solo se permiten letras del alfabeto en tipo de examen")
            return
        }

        fd.append("n-tipo",tipo.value)
        fd.append("n-des",des.value)
        fd.append("n-estado",estado)

        const post = await sendData("createexam.php",fd)

        if(post.charAt(0)==="1"){
            alert("Examen creado!")
            window.location.reload()
        }

        else alert("oops") 
        
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


const sendMail= async ()=>{
    try {
        const emptyfd= new FormData()
        const req = await sendData("mail.php",emptyfd)
        if(req==="1") alert("¡Correo Enviado! , revise su inbox para ver el reporte")

        else alert("oops")
    } catch (error) {
        console.error(error)
    }
}

document.getElementById("pdf").addEventListener("click",function(){
    sendMail()
})