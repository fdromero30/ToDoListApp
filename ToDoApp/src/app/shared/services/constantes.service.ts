
export class ConstantesService {

  /* Version */
  public static VERSION_FRONT = '0.1';

  /* TEMAS DE APLICACIÓN*/

  public static temaRosado = 'rosa-fucsia';
  public static temaAzul = 'yeti';
  public static temaNegro = 'dark-white';
  public static temaGris = 'gris-blanco';
  public static estados = ['ACTIVO', 'INACTIVO'];
  public static tipoDocumentos = ['CÉDULA', 'PASAPORTE', 'TARJETA DE IDENTIDAD'];


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

        
  
  
  // let user = new UsuarioModel('USUARIO PRUEBA', 'ACTIVO', new UsuarioPkModel('CEDULA', '10239267890'));
  // let user2 = new UsuarioModel('USUARIO PRUEBA 2', 'ACTIVO', new UsuarioPkModel('CEDULA', '10229383763'));
  // let user3 = new UsuarioModel('USUARIO PRUEBA 3', 'ACTIVO', new UsuarioPkModel('PASAPORTE', '1023789065'));
  //   this.usuarios.push(user, user2, user3);
}
