export class RegistroIngSalActivoFijo {
  constructor(
    public clasificacionActivoFijo: string,
    public DescripcionActivoFijo: string,
    public tipoActivoFijo: string,
    public serialActioFijo: string,
    public estadoActivoFijo: string,
    public propietarioActivoFijo: string,
    public observacionesActivoFijo: string,
    public marcaActivoFijo: string,
    public idActivo?: string,
    public numeroDocumentoFuncionario?: string
    ) { }
}
