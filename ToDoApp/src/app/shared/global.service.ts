import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { Subject, Observable, throwError } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { map, catchError, timeoutWith } from 'rxjs/operators';
import { ConstantesService } from './services/constantes.service';

@Injectable()
export class GlobalService {

  itemValue = new Subject();
  usuario: any;
  apiKey: string = null;
  userId: number = null;
  userName: string = null;
  token: string = null;
  expiracionToken = new EventEmitter();
  rolSeleccionado: string;
  permisosUsuario: any[];

  constructor(private http: HttpClient) {

  }

  public buildHeaders(contentJSON: boolean, urlReq: string) {
    const headers = new Headers();
    this.createSecurityOptions(headers, urlReq.includes('auth'));
    // var obj = this.cargaCacheSessionContext();
    const obj = this.cargaSessionContext();
    if (contentJSON) {
      headers.append('Content-Type', 'application/json');
    }
    headers.append(ConstantesService.SESSION_CONTEXT, JSON.stringify(obj));
    return headers;
  }

  private cargaSessionContext() {
    const obj = {};
    obj[ConstantesService.USER_ID_HEADER] = sessionStorage.getItem(ConstantesService.USER_ID_HEADER);
    obj[ConstantesService.TOKEN_EXP_DATE_HEADER] = sessionStorage.getItem(ConstantesService.TOKEN_EXP_DATE_HEADER);
    // obj[ConstantesService.LANGUAGE_HEADER] = sessionStorage.getItem(ConstantesService.LANGUAGE_HEADER);
    obj[ConstantesService.TIPO_DOC_SESSSION] = sessionStorage.getItem(ConstantesService.TIPO_DOC_SESSSION);
    obj[ConstantesService.NUMBER_HEADER] = sessionStorage.getItem(ConstantesService.NUM_DOC_SESSSION);
    return obj;
  }

  private createSecurityOptions(headers: Headers, envPass?: boolean) {
    // if(envPass && credenciales){
    //   headers.append('Authorization', 'Basic ' + credenciales);
    // }else  {
    headers.append('Authorization', 'Bearer ' + sessionStorage.getItem(ConstantesService.TOKEN_HEADER));
    // }
  }

  public postGenerico(url: string, cuerpo?: any): any {
    console.log(url);
    const headers = this.buildHeaders(true, url);

    const options = new Object({ headers });
    return this.http.post(url, cuerpo, options).pipe(
      // timeoutWith(10000,
      //     throwError('Tiempo Máximo Excedido')
      // ),
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public getGenerico(url: string): any { // la url debe traer los parametros en el path
    console.log(url);
    const headers = this.buildHeaders(true, url);

    const options = new Object({ headers });
    return this.http.get(url, options).pipe(
      // timeoutWith(10000,
      //     throwError('Tiempo Máximo Excedido')
      // ),
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  putGenerico(url: string, req: any): Observable<any> {

    const body = req;
    const headers = this.buildHeaders(true, url);

    const options = new Object({ headers });
    return this.http.put(url, body, options).pipe(
      // timeoutWith(10000,
      //     throwError('Tiempo Máximo Excedido')
      // ),
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  deleteGenerico(uriService: string): any {
    console.log(uriService);
    const headers = this.buildHeaders(false, uriService);

    const options = new Object({ headers });
    return this.http.delete(uriService, options).subscribe((data) => {
      console.log(data);
    });
  }



  public getPublic(url: string) {

    return this.http.get(url).pipe(
      timeoutWith(30000,
        throwError('Tiempo Máximo Excedido')
      ),
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  public postPublic(url: string) {
    const header = {
      ipHost: window.location.origin,
      apiKey: this.apiKey,
      userId: this.userId
    };
    const tokenAcceso = sessionStorage.getItem('Token');
    const body = { header, tokenAcceso };

    return this.http.post(url, JSON.stringify(body)).pipe(
      timeoutWith(10000,
        throwError('error')
      ),
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private extractData(res) {
    const body = res;
    return body;
  }
  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return throwError(error);
  }

  public cerrarSesion() {
    sessionStorage.removeItem('Token');
    sessionStorage.removeItem('ExpiracionToken');
    sessionStorage.removeItem('Usuario');
    sessionStorage.removeItem('roles');
    sessionStorage.removeItem('numDocumento');
    sessionStorage.removeItem('tipoDocumento');
  }

  public setIdioma(value) {
    this.itemValue.next(value);
    sessionStorage.setItem('idioma', value);
  }
  public getIdioma() {
    return sessionStorage.getItem('idioma');
  }
  public setUsuario(usuario) {
    this.usuario = usuario;

  }
  public getUsuario() {
    return this.usuario;
  }

  public replaceCardTextLine(text: string) {
    return text
      ? text.replace(new RegExp('\\\\n', 'g'), ', ')
      : 'No Description';
  }

}
