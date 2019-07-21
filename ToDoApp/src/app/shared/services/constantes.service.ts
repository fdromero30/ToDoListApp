
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

  // Session Storage
  public static USUARIO_SESSSION = 'Usuario';
  public static ROL_SESSION = 'Rol';
  public static TIPO_DOC_SESSSION = 'tipoDocumento';
  public static NUM_DOC_SESSSION = 'numDocumento';
  public static SEDE_SESSSION = 'sedeSession'




}
