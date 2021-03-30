const type_enums = {
    PENDIENTE:"Pendiente",
    REALIZADO:"Realizado"
}



class Examen{
    constructor(req){
        this.req=req
    }

      build(){
        const test = document.querySelector(".test")
        let classnames = "shadow p-3 m-5 rounded w-50"
        let changebtn

        switch(this.req.estado){
            case type_enums.PENDIENTE:
                classnames = classnames+" bg-warning"
                changebtn = '<input type="button" class="btn btn-outline-success change" value="Anotar como realizado" onclick="dosomt()">'
                break

            case type_enums.REALIZADO:
                classnames = classnames+" bg-success"
                changebtn = '<input type="button" class="btn btn-outline-warning change" value="Cambiar a Pendiente" onclick="dosomt()">'
                break
        }

        const structure = `<div class="${classnames}" id=${this.req.id}>
        <div class="container">
            <div class="row">
                <div class="col"><h4>${this.req.tipo_examen}</h4></div>
                <div class="col"><h4>${this.req.estado}</h4></div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-6">
                ${this.req.descripcion}
                </div>
                <div class="col">${changebtn}</div>
                <div class="col"><a href="" class="btn btn-outline-danger">Borrar</a></div>
            </div>
        </div>

    </div>`

        test.innerHTML+= structure


        

    }
}





const ptest = {
    id:1,
    tipo_examen:"Glicemia",
    descripcion:"Examen para verificar los niveles de azucar en ayunas y post-pandrial",
    estado:"Pendiente"
}

const a = new Examen(ptest)

a.build()

