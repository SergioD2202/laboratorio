
class Paciente {
    constructor(req,count){
        this.req = req
        this.count = count

    }

    build(){

        return `
        <h4>${this.req.nombre}</h4>

        <div class="container">
            <div class="row">
                <div class="col-6">
                Edad: ${this.req.edad} <br>
                Sexo: ${this.req.sexo} <br>
                Tipo de Sangre: ${this.req.tipo_sangre} <br>
                </div>
                <div class="col"><input type="button"  class="btn btn-outline-primary id-${this.count}-enter" value="Entrar"></div>
                <div class="col"><input type="button" class="btn btn-outline-danger id-${this.count}-delete" value="Borrar"></div>
            </div>
        </div>
        `

    }
}


export {Paciente}