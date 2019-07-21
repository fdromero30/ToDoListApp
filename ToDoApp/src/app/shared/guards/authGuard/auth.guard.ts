import { AlertService } from '../../services/alert.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { GlobalService } from '../../global.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private alertService: AlertService, private globalService: GlobalService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (sessionStorage.getItem('Token') && sessionStorage.getItem('expiracionToken')) {
            const expiracionToken: Date = new Date(Date.parse(sessionStorage.getItem('expiracionToken')));
            // logged in so return true
            if (expiracionToken >= new Date(Date.now()) && sessionStorage.getItem('Usuario') != null) {
                return true;
            }
        }
        // not logged in so redirect to login page with the return url
        this.globalService.cerrarSesion();
        this.alertService.generateAlertError('Acceso Denegado, por favor ingrese a SIA3', 'Error');
        this.router.navigate(['/not-found']);
        return false;
    }
}
