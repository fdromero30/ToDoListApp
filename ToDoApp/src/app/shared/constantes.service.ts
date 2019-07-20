// export class ConstantesService {
//   /* CONSTANTES */

//   public static HORAS_DIA = ['01:00 am', '02:00 am', '03:00 am', '04:00 am', '05:00 am',
//     '06:00 am', '07:00 am', '08:00 am', '09:00 am', '10:00 am',
//     '11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm',
//     '06:00 pm', '07:00 pm', '08:00 pm', '09:00 pm', '10:00 pm',
//     '11:00 pm', '12:00 am'
//   ];

//   public static MESES = new Array('ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO'
//     , 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE');
//   public static DIAS_SEMANA = new Array('Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado');

//   public static MSJ_CONFIRM_REGISTRO_SALIDA = '¿Está seguro de registrar salida?';
//   public static MSJ_CONFIRM_REGISTRO_SAL_PARCIAL = '¿Está seguro de registrar salida parcial?';
//   public static MSJ_CONF_RGISTR_SAL_PARCIAL_SIN_ACTIV = '¿Está seguro de registrar salida, sin reitrar activo ingresado?';
//   public static MSJ_CONF_SAL_SIN_STICKER = '¿Está seguro de registrar salida sin entrega de sticker/Tarjeta?';

//   public static VISITANTES = 'VISITANTES';
//   public static VISITANTES_CON_AGENDA = 'VISITANTES CON AGENDA';
//   public static RESULTADO_DE_BUSQUEDA = 'RESULTADO DE BUSQUEDA';
//   public static VISITAS_ACTIVAS = 'VISITAS ACTIVAS';

//   public static SUBTIULO_VISITANTES = 'Listado de personas que tienen agenda hoy.';
//   public static SUBTITULO_VISITANTES_CON_AGENDA = 'Listado de personas con agendas.';
//   public static SUBTITULO_UN_RESULTADO = 'Se encontró un resultado.';
//   public static SUBTITULO_ACTIVOS = 'Listado de personas que se encuentran en visita.';
//   public static SUBTITULO_NO_ENCONTRADO_VIGILANTE = 'No se encontró resultado de la visita programada con los datos ingresados.';
//   public static SUBTITULO_NO_ENCONTRADO_PREAUTORIZADOR = 'No se encontró un resultado.';

//   public static SUBTITULO_DOS_VIGILANTE = 'Intente usar otra opción de busqueda, como nombre o número de documento';
//   public static SUBTITULO_DOS_PREAUTORIZADOR
//     = 'Intente usar otra opción de busqueda, como nombre o número de documento o crea nuevo visitante';

//   public static BANDERA_ROL_VIGILANTE = 'Vigilante';
//   public static BANDERA_ROL_PREAUTORIZADOR = 'Preautorizador';

//   public static ESTADO_AGENDA_AGENDADA = 'AGENDADA';
//   public static ESTADO_AGENDA_ACT_CON = 'ACT_CON';
//   public static ESTADO_AGENDA_ACT_SIN = 'ACT_SIN';

//   public static ESTADO_ACTIVO_FIJO_INGRESADO = 'ING';
//   public static ESTADO_ACTIVO_FIJO_RETIRADO = 'RET';


//   /* Gestor de Archivos  */
//   // tslint:disable-next-line: max-line-length
//   public static SIN_ADJUNTO =
// 'No se ha cargado ningún archivo. Seleccione la opción cargar archivo
// y la opción registrar visita para programar visitas a los visitantes incluidos en el archivo';
//   public static SELECCIONAR_ARCHIVO = 'Seleccione Archivo';

//   // Constantes Servicios SIA3
//   public static AUTENTICACION_RESOURCE = 'recursoswebseguridad/servicios/autenticacion';
//   public static TOKEN_RESOURCE = '/obtenertoken';
//   public static ROLES_PERMISOS_RESOURCE = '/obtenerrolespermisos';

//   public static USER_ID_HEADER = 'usuario';
//   public static TOKEN_HEADER = 'Token';
//   public static TOKEN_EXP_DATE_HEADER = 'expiracionToken';
//   public static LANGUAGE_HEADER = 'idioma';
//   public static SESSION_CONTEXT = 'session-context';

// }

export class ConstantesService {

  /* Version */
  public static VERSION_FRONT = '0.1';

  /* TEMAS DE APLICACIÓN*/

  public static temaRosado = 'rosa-fucsia';
  public static temaAzul = 'yeti';
  public static temaNegro = 'dark-white';
  public static temaGris = 'gris-blanco';


  /* CONSTANTES */

  public static HORAS_DIA = ['01:00 am', '02:00 am', '03:00 am', '04:00 am', '05:00 am',
    '06:00 am', '07:00 am', '08:00 am', '09:00 am', '10:00 am',
    '11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm',
    '06:00 pm', '07:00 pm', '08:00 pm', '09:00 pm', '10:00 pm',
    '11:00 pm', '12:00 am'
  ];

  public static MESES =
    new Array('ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE');
  public static DIAS_SEMANA = new Array('Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado');

  public static MSJ_CONFIRM_REGISTRO_CODIGO_TARJETA = '¿Está seguro de asociar tarjeta y registrar ingreso?';
  public static MSJ_CONFIRM_REGISTRO_SALIDA = '¿Está seguro de registrar salida?';
  public static MSJ_CONFIRM_REGISTRO_SAL_PARCIAL = '¿Está seguro de registrar salida parcial?';
  public static MSJ_CONF_RGISTR_SAL_PARCIAL_SIN_ACTIV = '¿Está seguro de registrar salida, sin reitrar activo ingresado?';
  public static MSJ_CONF_SAL_SIN_STICKER = '¿Está seguro de registrar salida sin entrega de sticker/Tarjeta?';

  public static VISITANTES = 'VISITANTES';
  public static VISITANTES_CON_AGENDA = 'VISITANTES CON AGENDA';
  public static RESULTADO_DE_BUSQUEDA = 'RESULTADO DE BUSQUEDA';
  public static VISITAS_ACTIVAS = 'VISITAS ACTIVAS';

  public static SUBTIULO_VISITANTES = 'Listado de personas que tienen agenda hoy.';
  public static SUBTITULO_VISITANTES_CON_AGENDA = 'Listado de personas con agendas.';
  public static SUBTITULO_UN_RESULTADO = 'Se encontró un resultado.';
  public static SUBTITULO_ACTIVOS = 'Listado de personas que se encuentran en visita.';
  public static SUBTITULO_NO_ENCONTRADO_VIGILANTE = 'No se encontró resultado de visita programada con los datos ingresados.';
  public static SUBTITULO_NO_ENCONTRADO_PREAUTORIZADOR = 'No se encontró un resultado.';

  public static SUBTITULO_DOS_VIGILANTE = 'Intente usar otra opción de busqueda, como nombre o número de documento';
  public static SUBTITULO_DOS_PREAUTORIZADOR = 'Intente usar otra opción de busqueda, como nombre o número de documento o cree nuevo visitante';

  public static BANDERA_ROL_VIGILANTE = 'Vigilante';
  public static BANDERA_ROL_PREAUTORIZADOR = 'Preautorizador';

  public static ESTADO_AGENDA_AGENDADA = 'AGENDADA';
  public static ESTADO_AGENDA_ACT_CON = 'ACT_CON';
  public static ESTADO_AGENDA_ACT_SIN = 'ACT_SIN';
  public static ESTADO_AGENDA_SALIDA_PARCIAL = 'SAL_PAR';

  public static ESTADO_ACTIVO_FIJO_VALOR_RETIRADO = 'RETIRADO';
  public static ESTADO_ACTIVO_FIJO_VALOR_INGRESADO = 'INGRESADO';
  public static ESTADO_ACTIVO_FIJO_INGRESADO = 'ING';
  public static ESTADO_ACTIVO_FIJO_RETIRADO = 'RET';

  public static PANTALLA_INGRESO_SALIDA_FUNCIONARIO = 'Funcionarios';
  public static PANTALLA_INGRESO_SALIDA_VISITANTE_ENTRADA = 'Visitantes-Entrada';
  public static PANTALLA_INGRESO_SALIDA_VISITANTE_SALIDA = 'Visitantes-Salida';

  /**
   * MENSAJES CU_20
   */
  public static REGISTRO_ACTIVO_FIJO_VISITANTE_EXISTOSO = 'Se registró el elemento exitosamente';

  /* Gestor de Archivos  */
  // tslint:disable-next-line: max-line-length
  public static SIN_ADJUNTO = 'No se ha cargado ningún archivo. Seleccione la opción cargar archivo y la opción registrar visita para programar visitas a los visitantes incluidos en el archivo';
  public static SELECCIONAR_ARCHIVO = 'Seleccione Archivo';

  // Constantes Servicios SIA3
  public static AUTENTICACION_RESOURCE = 'recursoswebseguridad/servicios/autenticacion';
  public static TOKEN_RESOURCE = '/obtenertoken';
  public static ROLES_PERMISOS_RESOURCE = '/obtenerrolespermisos';

  public static USER_ID_HEADER = 'usuario';
  public static NUMBER_HEADER = 'numeroDocumento';
  public static TOKEN_HEADER = 'Token';
  public static TOKEN_EXP_DATE_HEADER = 'expiracionToken';
  public static LANGUAGE_HEADER = 'idioma';
  public static SESSION_CONTEXT = 'session-context';

  public static HTML_STICKER =
    '<html><head><style>.align-center{text-align:center}.distribution{display:inline-flex}.vertical{writing-mode:vertical-rl;' +
    'text-orientation:upright}.t-12{width:100%}.titulo{font-size:1.2em;margin-top:0px}#datos>p{margin:0px 20px}.sub-titulo{' +
    'font-size: .9em}</style></head><body><div class=\"distribution\"><div class=\"align-center\" style=\"width: 30%;\"> <img ' +
    'src=\"[logoministerio]\" width=\"100%\" /><p>MINEDUCACIÓN</p><div class=\"vertical t-12\" style=\"font-size: 2em\"><p ' +
    'style=\"margin: 2em\">VISITANTE</p></div></div><div style=\"border: 1px solid white; width: 70%\"><div class=\"align-center\">' +
    '<p class=\"titulo\">VISITMANAGER</p> <img src=\"[fotovisitante]\" width=\"200px\" height=\"200px\"></div><div id=\"datos\" ' +
    'class=\"align-center\"><p>[nombres]</p><p id=\"identificacion\">[documentoIdentificacion]</p><p class=\"sub-titulo\">Autorizado por:' +
    '</p>[autorizadoPor]<p class=\"sub-titulo\">Sede:</p><p>[sede]</p> <img src=\"[codigobarras]\" max-width=\"100%\" height=\"80\"/>' +
    '<p>[ingreso]</p><p>Ingresa Activo Fijo:</p><p style=\"border-bottom: 1px solid; margin: 0 8em;\">[activoFijo]</p></div></div>' +
    '</div></body></html>';

  /**
   * Constantesd de mensaje en CU 023 cancelar agenda masiva
   */
  public static INSTRUCCION_USO = 'Seleccione la fecha y el archivo con el que se crearon las visitas que se van a cancelar';
  public static MENSAJE_EXCEPCION_NO_ARCHIVOS_EN_FECHA = 'No existen archivos de creación masiva de agendas para la fecha seleccionada';
  public static PLACEHOLDER_DATE_PICKER = 'Seleccione fecha de creación de visitas';
  public static PLACEHOLDER_NOMBRE_ARCHIVO = 'Seleccione archivo con el que se crearon las visitas';

  // Mensajes modales de confirmaciòn CU_010 y CU_009

  public static FILTRO_ACTIVOS_NO_ENCONTRADO =
    'Los criterios buscados no se encuentran asociados a ningún Activo Fijo del MEN registrado'
    + ', por favor verifique la información ingresada e intente nuevamente';
  public static CONFIRMACION_INGRESO_ACTIVO = '¿Está seguro de ingresar elemento?';
  public static CONFIRMACION_RETIRO_ACTIVO = '¿Está seguro de retirar elemento?';
  public static CONFIRMACION_RETIRO_ACTIVO_NO_PROPIO =
    'El activo consultado no se encuentra asignado al funcionario que está gestionando el retiro ¿desea continuar?';
  public static FILTRO_ACTIVOS_RECIENTES_VACIO = 'El dato <<Consulta Funcionario>> no puede estar vacío,'
    + ' por favor ingrese un Número de identificación o Nombre de Funcionario e intente nuevamente';

  public static ACTIVO_EXITENTE_EN_SISTEMA = 'El “Número serial” ingresado ya se encuentra asociado a un Activo Fijo previamente registrado, por favor verifique';
  public static ACTIVO_NO_EXITENTE_EN_SISTEMA = 'El activo no se encuentra registrado en el sistema';

  public static PLACEHOLDER_NUMERO_SERIAL = 'Incluya número de serial*';
  public static PLACEHOLDER_TIPO_ACTIVO = 'Digite el tipo de activo';
  public static OPCION_CUAL = '¿Cuál?';
  public static VALOR_CUAL = 'cual';

  // CONSTANTES PROPIEDAD ACTIVO

  public static ACTIVO_MEN = 'MEN';


  // ROLES ACVIS
  public static ROL_VIGILANTE = 'VIG';
  public static ROL_PREAUTORIZADOR = 'PREAU';
  public static ROL_ADMINISTADOR = 'ADM';

  // Session Storage
  public static USUARIO_SESSSION = 'Usuario';
  public static ROL_SESSION = 'Rol';
  public static TIPO_DOC_SESSSION = 'tipoDocumento';
  public static NUM_DOC_SESSSION = 'numDocumento';
  public static SEDE_SESSSION = 'sedeSession'

  public static ROL_VALOR_VIGILANTE = 'Vigilante';
  public static ROL_VALOR_PREAUTORIZADOR = 'Preautorizador';


  /**
   * CONSTANTES CU_003
  */
  public static MSG_AGENDA_CREADA_POR_OTRO_PREAUT = "No se puede actualizar la información del visitante porque el visitante tiene una visita creada por otro Preautorizador";
  public static MSG_AGENDA_ESTADO_NO_EDITABLE = 'No se puede actualizar la información del visitante porque tiene registrada una visita con un estado no permitido para editar información';
  public static MSG_AGENDA_CREADA_EXITO = 'La visita se ha creado exitosamente';
  public static MSG_PARQUEADERO_VERIFICACION = 'El cupo para el parqueadero está sujeto a verificación.';
  public static MSG_ACTUALIZACION_AGND_CORRECTA = "Se actualizó la información del visitante correctamente";

  public static BTN_BICI = 'btn-BICI';
  public static BTN_CARRO = 'btn-CAR';
  public static BTN_MOTO = 'btn-MOTO';



  /**
   * Método que realiza la descarga de un archivo
   * @param tipoDocumento consultar : https://en.wikipedia.org/wiki/Media_type
   */
  public static descargarDocumento(tipoDocumento: string, nombreDocumento: string, base64: string) {
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style.cssText = 'display: none';
    a.href = 'data:' + tipoDocumento + ';base64,' + base64;
    a.download = nombreDocumento;
    a.click();
  }
}
