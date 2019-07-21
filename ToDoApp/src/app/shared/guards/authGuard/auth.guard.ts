import { AlertService } from '../../services/alert.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { GlobalService } from '../../global.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private alertService: AlertService, private globalService: GlobalService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        // AQUI SE DEBERIAN COLOCAR LAS VALIDACIONES DE ACCESO A PAGINAS COMO PERMISOS DE ROL O TOKENS EXISTENTES
        return true;
    }
}
