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

  /**
   * @author fromero
   * @param contentJSON 
   * @param urlReq 
   */
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

  /**
   * @author fromero
   */
  private cargaSessionContext() {
    const obj = {};
    obj[ConstantesService.USER_ID_HEADER] = sessionStorage.getItem(ConstantesService.USER_ID_HEADER);
    obj[ConstantesService.TOKEN_EXP_DATE_HEADER] = sessionStorage.getItem(ConstantesService.TOKEN_EXP_DATE_HEADER);
    // obj[ConstantesService.LANGUAGE_HEADER] = sessionStorage.getItem(ConstantesService.LANGUAGE_HEADER);
    obj[ConstantesService.TIPO_DOC_SESSSION] = sessionStorage.getItem(ConstantesService.TIPO_DOC_SESSSION);
    obj[ConstantesService.NUMBER_HEADER] = sessionStorage.getItem(ConstantesService.NUM_DOC_SESSSION);
    return obj;
  }

  /**
   * 
   * @param headers 
   * @param envPass 
   */
  private createSecurityOptions(headers: Headers, envPass?: boolean) {
    headers.append('Authorization', 'Bearer ' + sessionStorage.getItem(ConstantesService.TOKEN_HEADER));

  }

  /**
   * @author fromero
   * @param url 
   * @param cuerpo 
   */
  public postGenerico(url: string, cuerpo?: any): any {
    console.log(url);
    const headers = this.buildHeaders(true, url);

    const options = new Object({ headers });
    return this.http.post(url, cuerpo, options).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  /**
   * @author fromero
   * @param url 
   */
  public getGenerico(url: string): any { // la url debe traer los parametros en el path
    console.log(url);
    const headers = this.buildHeaders(true, url);

    const options = new Object({ headers });
    return this.http.get(url, options).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  /**
   * @author fromero
   * @param url 
   * @param req 
   */
  putGenerico(url: string, req: any): Observable<any> {

    const body = req;
    const headers = this.buildHeaders(true, url);

    const options = new Object({ headers });
    return this.http.put(url, body, options).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }


  /**
   * 
   * @param uriService 
   */
  deleteGenerico(uriService: string): any {
    console.log(uriService);
    const headers = this.buildHeaders(false, uriService);
    const options = new Object({ headers });
    return this.http.delete(uriService, options).subscribe((data) => {
      console.log(data);
    });
  }


  /**
   * @author fromero
   * @param res 
   */
  private extractData(res) {
    const body = res;
    return body;
  }
  /**
   * @author fromero
   * @param error 
   */
  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return throwError(error);
  }

}
