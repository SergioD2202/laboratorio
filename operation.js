function dosomt(){
    const el = document.getElementById("1")
    const changebtn = el.querySelector(".change")

    if(el.classList.contains("bg-warning")){
        el.classList.remove("bg-warning")
        el.classList.add("bg-success")
        changebtn.value = "Cambiar a Pendiente"
        changebtn.classList.remove("btn-outline-success")
        changebtn.classList.add("btn-outline-warning")
    }
    else{
        el.classList.remove("bg-success")
        el.classList.add("bg-warning")
        changebtn.value = "Anotar como realizado"
        changebtn.classList.remove("btn-outline-warning")
        changebtn.classList.add("btn-outline-success")
    }

      }