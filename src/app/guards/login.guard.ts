import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      if (this.hasUser()) {
        return true;
      }
      alert('Inicie Sesión');
      return false;
    }
    hasUser(): boolean {
      const token = sessionStorage.getItem("Token");
      if (token) {
        return true;
      }
      return false;
    }
}
