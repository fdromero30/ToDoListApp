import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Subject, Observable, throwError } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { map, catchError, timeoutWith } from 'rxjs/operators';
import { ConstantesService } from './constantes.service';

@Injectable()
export class GlobalService {

  itemValue = new Subject();

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
    obj[ConstantesService.TIPO_DOC_SESSSION] = sessionStorage.getItem(ConstantesService.TIPO_DOC_SESSSION);
    obj[ConstantesService.NUMBER_HEADER] = sessionStorage.getItem(ConstantesService.NUM_DOC_SESSSION);
    return obj;
  }

  private createSecurityOptions(headers: Headers, envPass?: boolean) {
    headers.append('Authorization', 'Bearer ' + sessionStorage.getItem(ConstantesService.TOKEN_HEADER));
  }

  public postGenerico(url: string, cuerpo?: any): any {
    console.log(url);
    const headers = this.buildHeaders(true, url);

    const options = new Object({ headers });
    return this.http.post(url, cuerpo, options).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public getGenerico(url: string): any {
    console.log(url);
    const headers = this.buildHeaders(true, url);

    const options = new Object({ headers });
    return this.http.get(url, options).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  putGenerico(url: string, req: any): Observable<any> {

    const body = req;
    const headers = this.buildHeaders(true, url);

    const options = new Object({ headers });
    return this.http.put(url, body, options).pipe(
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

  public replaceCardTextLine(text: string) {
    return text
      ? text.replace(new RegExp('\\\\n', 'g'), ', ')
      : 'No Description';
  }

}
