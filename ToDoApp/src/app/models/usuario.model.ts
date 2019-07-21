export class UsuarioModel {
    userid: string;
    apellidos: string;
    nombre: string;
    permisos: any;
    roles: any;
    constructor(UserId: string, Apellidos: string, Nombre: string, Permisos: any, Roles: any) {

        this.userid = UserId;
        this.apellidos = Apellidos;
        this.nombre = Nombre;
        this.permisos = Permisos;
        this.roles = Roles;

    }
}
