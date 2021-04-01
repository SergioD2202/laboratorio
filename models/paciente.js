
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

    readOnly(){
        return `
        <h4>${this.req.nombre}</h4>

        <div class="container">
            <div class="row">
                <div class="col"><h4>Edad: ${this.req.edad}</h4></div>
                <div class="col"><h4>Sexo: ${this.req.sexo}</h4></div>
                <div class="col"><h4>Tipo de Sangre: ${this.req.tipo_sangre}</h4></div>
            </div>
        </div>
        `
    }
}


export {Paciente}