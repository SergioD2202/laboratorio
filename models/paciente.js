
class Paciente {
    constructor(req){
        this.req = req

    }

    build(){
        let classnames = "shadow p-3 m-5 rounded w-50 bg-light"

        return `<div class="${classnames}">
        <h4>${this.req.nombre}</h4>

        <div class="container">
            <div class="row">
                <div class="col-6">
                Edad: ${this.req.edad} <br>
                Sexo: ${this.req.sexo} <br>
                Tipo de Sangre: ${this.req.tipo_sangre}
                </div>
                <div class="col"><a href="" class="btn btn-outline-primary">Entrar</a></div>
                <div class="col"><a href="" class="btn btn-outline-info">Modificar</a></div>
                <div class="col"><a href="" class="btn btn-outline-danger">Borrar</a></div>
            </div>
        </div>

    </div>`

    }
}


export {Paciente}