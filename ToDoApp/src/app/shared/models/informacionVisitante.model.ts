
export class InformacionVisitanteModel {
    constructor(
        public nombreCompleto: string,
        public tipoDocumento: string,
        public numeroDocumento: string,
        public correoElectronico: string,
        public empresa: string,
        public funcionario: string,
        public foto: string,
        public vehiculo: any,
        public placa: string,
        public ingresoActivo: boolean,
        public pantalla: string,
        public listaVisitas: InformacionVisitaDetalle[],
        public tipoVisitante: string,
        public saleActivoFijo?: any,
        public sticker?: boolean,
        public tipoRegistro?: string,
        public ingresoVehiculo?: boolean,
        public observaciones?: string,
        public codigoTipoDocumento?: string,
        public codigoTarjeta?: string
    ) { }
}

export class InformacionVisitaDetalle {
    constructor(
        public fechaAutorizacion: string,
        public aquienVisita: string,
        public dependencia: string,
        public quienAutoriz: string,
        public extensionTelefonica?: string,
        public fecha_Inicial_Agendada?: string,
        public num_Doc_Visitante?: string,
        public numero_Id_Funcionario?: string,
        public tipo_Doc_Visitante?: string,
        public tipo_Id_Funcionario?: string,
    ) { }
}
