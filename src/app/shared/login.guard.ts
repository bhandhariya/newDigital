import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean{
        if(sessionStorage.getItem('Token') != null){
            return true;
        }else{
            this.router.navigate(['login']);
            return false;
        }

    }

}