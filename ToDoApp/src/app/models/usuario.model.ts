export class UsuarioModel {

    nombre: string;
    tipoDocumento: string;
    numDocumento: string;
    estado: string

    constructor(nombre, tipoDoc, numDoc, estado) {
        this.nombre = nombre;
        this.tipoDocumento = tipoDoc;
        this.numDocumento = numDoc;
        this.estado = estado;
    }

}
