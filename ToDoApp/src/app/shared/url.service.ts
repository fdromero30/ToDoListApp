import { Injectable } from '@angular/core';
import { UrlControl } from '../models/generic.model';
import { AppSettings } from '../app.settings';

@Injectable()
export class UrlService {
  public hostAPI: string = AppSettings.APIREST_ENDPOINT;

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
      case 'usuario':
        return '/servicios/usuario';
      default:
        return '';
    }
  }

  private getPathParams(queryParams: [string, string][]): string {

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
