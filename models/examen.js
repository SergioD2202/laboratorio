const type_enums = {
    PENDIENTE:"Pendiente",
    REALIZADO:"Realizado"
}



class Examen{
    constructor(req,counter){
        this.req=req
        this.counter=counter
    }

      build(){
        let classnames = "shadow p-3 m-5 rounded w-50"
        let changebtn

        switch(this.req.estado){
            case type_enums.PENDIENTE:
                classnames = classnames+" bg-warning"
                changebtn = `<input type="button" class="btn btn-outline-success change-${this.counter}" value="Anotar como realizado">`
                break

            case type_enums.REALIZADO:
                classnames = classnames+" bg-success"
                changebtn = `<input type="button" class="btn btn-outline-warning change-${this.counter}" value="Cambiar a Pendiente">`
                break
        }

        const structure = `<div class="${classnames}" id=${this.req.id_examen}>
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
                <div class="col"><a href="" class="btn btn-outline-danger id-delete-${this.counter}">Borrar</a></div>
            </div>
        </div>

    </div>`
        return structure

    }
}


export {Examen}

