export class UsuarioModel {

    nombre: string;
    estado: string
    usuarioPK: UsuarioPkModel

    constructor(nombre, estado, usuarioPK) {
        this.nombre = nombre;
        this.estado = estado;
        this.usuarioPK = usuarioPK;
    }

}

export class UsuarioPkModel {


    tipoDocumento: string;
    numDocumento: string;

    constructor(tipoDoc, numDoc) {

        this.tipoDocumento = tipoDoc;
        this.numDocumento = numDoc;
    }

}
