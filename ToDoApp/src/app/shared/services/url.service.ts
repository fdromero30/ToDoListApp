import { Injectable } from '@angular/core';
import { UrlControl } from '../models/generic.model';
import { AppSettings } from '../../app.settings';

@Injectable()
export class UrlService {
  // public hostSIA3: string = AppSettings.API_ENDPOINT; // se obtiene el ENDPOINT BASE
  public hostAPI: string = AppSettings.APIREST_ENDPOINT;
  // public hostAPI1: string = AppSettings.APIREST_ENDPOINT1;

  getUrl(control: UrlControl, host: string): string {
    const provider = this.getProvider(control.serviceProvider);
    let url = host + provider;
    if (control.pathParameters != null) {
      const path = this.getPathParams(control.pathParameters);
      url = url + path;
    }
    if (control.queryParameters != null) {
      const query = this.getQueryParams(control.queryParameters);
      url = url + query;
    }
    return url;
  }

  private getProvider(serviceProvider: string): string {
    switch (serviceProvider) {
      case 'validarEstadoCodigo':
        return '/servicios/codigos/validarEstadoCodigo';
      case 'Init':
        return '/servicio/init';
      case 'ObtenerToken':
        return '/seguridad-apiRest/recursoswebseguridad/servicios/autenticacion/obtenertoken';
      case 'ObtenerPermisosRol':
        return '/seguridad-apiRest/recursoswebseguridad/servicios/autenticacion/obtenerrolespermisos';
      case 'getDiscapacidad':
        return '/servicios/grupodiscapacidad';
      case 'ObtenerFuncionario':
        return '/servicios/funcionario';
      case 'ObtenerDependencias':
        return '/servicios/dependencia';
      case 'ObtenerDominio':
        return '/servicios/detalledominio';
      case 'ObtenerGrupoDiscapacidad':
        return '/servicios/grupodiscapacidad/consultaDiscapacidadFiltros';
      case 'getTipoIdentificacion':
        return '/servicios/detalledominio?filterBy=detalleDominioPK.nombreDominio%3ALIKE%3ATipoIdentificacion';
      case 'ObtenerTipoVehiculo':
        return '/servicios/detalledominio?filterBy=detalleDominioPK.nombreDominio%3ALIKE%3ATipoVehiculo';
      case 'GuardarAgendaVisitante':
        return '/servicios/agenda/registroAgenda';
      case 'GuardarGrupoFuncionariosDiscapacidad':
        return '/servicios/funcionario/actualizarFuncionario';
      case 'ObetenerInformacionAgendasVisitante':
        return '/servicios/agenda/consultaInformacionVisitante';
      case 'ObtenerAgendaVisitante':
        return '/servicios/agenda';
      case 'ObtenerVisitante':
        return '/servicios/visitante';
      case 'RegistrarSalidaVisitante':
        return '/servicios/agenda/registrarSalidaVisitante';
      case 'RegistrarIngresoVisitante':
        return '/servicios/agenda/registrarIngresoVisitante';
      case 'ConsultaAgendasDia':
        return '/servicios/agenda/consultaVisitaAgendada';
      case 'ConsultaActivoFijo':
        return '/servicios/activofijovisitante';
      case 'cancelarAgenda':
        return '/servicios/agenda/cancelarAgenda';
      case 'Funcionario':
        return '/servicios/funcionario/registros';
      case 'MarcasActivoFijo':
        return '/servicios/activofijo/marca';
      case 'RegistroActivoFijo':
        return '/servicios/regingsalactivofijo';
      case 'ValidarAgenda':
        return '/servicios/agenda/validarAgenda';
      case 'ObtenerIngresoSalidaActivosFijo':
        return '/servicios/activofijo/ObtenerIngresoSalidaActivosFijo';
      case 'ObtenerActivoFijoFuncionario':
        return '/servicios/activofijo/ObtenerActivoFijoFuncionario';
      case 'ConsultaActivosFijosVisitante':
        return '/servicios/activofijovisitante/consultaActivoFijo';
      case 'registrarActivoFijoVisitante':
        return '/servicios/activofijovisitante/registrarActualizarActivoFijo';
      case 'RegistrarSalidaActivoFijoFuncionario':
        return '/servicios/activofijo/RegistrarSalidaActivoFijoFuncionario';
      case 'RegistrarIngresoActivoFijoFuncionario':
        return '/servicios/activofijo/RegistrarIngresoActivoFijoFuncionario';
      case 'CrearActivoFijoFuncionario':
        return '/servicios/activofijo/CrearActivoFijoFuncionario';
      case 'reporteActivosFijos':
        return '/servicios/reportes/reportesActivoFijo';
      case 'reporteInformeVisitante':
        return '/servicios/reportes/reportesInformeVisitante';
      case 'ObtenerTipoActivoFijo':
        return '/servicios/activofijo/ObtenerTipoActivoFijo';
      case 'ObtenerDescripcionActivoFijo':
        return '/servicios/activofijo/ObtenerDescripcionActivoFijo';
      case 'ObtenerTipoFuncionario':
        return '/servicios/funcionario/ObtenerTipoFuncionario';
      case 'reporteTotalIngresos':
        return '/servicios/reportes/reporteTotalIngresos';
      case 'consultaNombreArchivo':
        return '/servicios/agenda/consultarArchivosCargaMasiva';
      case 'consultaAgendasArchivo':
        return '/servicios/agenda/consultarAgendaMasiva';
      case 'consultarEstadoCodigoTarjeta':
        return '/servicios/agenda/consultarEstadoCodigoTarjeta';
      case 'consultarFucionarioSIA3':
        return '/servicios/funcionario/consultarFucionarioSIA3';
      case 'ObtenerParametros':
        return '/servicios/parametros';
      case 'retomarVisita':
        return '/servicios/agenda/retomavisita';
      case 'RegistrarIngresoVisitanteTarjeta':
        return '/servicios/agenda/RegistrarIngresoVisitanteTarjeta';
      default:
        return '';
    }
  }

  private getPathParams(queryParams: [string, string][]
    // pathParams: [number, string][]
  ): string {
    // let paramResponse = '';
    // for (const param of pathParams) {
    //   paramResponse = paramResponse + param[1] + '%26';
    // }
    // const urilenght = paramResponse.length;
    // return '/' + paramResponse.substring(0, (urilenght - 1));
    let paramResponse = '';
    for (const param of queryParams) {
      paramResponse = paramResponse + param[0] + '=' + param[1] + '%26';
    }
    const urilenght = paramResponse.length;
    return '?' + paramResponse.substring(0, (urilenght - 3));
  }

  private getQueryParams(queryParams: [string, string][]): string {
    let paramResponse = '';
    for (const param of queryParams) {
      paramResponse = paramResponse + param[0] + '=' + param[1] + '&';
    }
    const urilenght = paramResponse.length;
    return '?' + paramResponse.substring(0, (urilenght - 1));
  }

  public encodeURI(uri: string): string {
    return encodeURIComponent(uri);
  }
  public decodeURI(uri: string): string {
    return decodeURIComponent(uri);
  }
}
