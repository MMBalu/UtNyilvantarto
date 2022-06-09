import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
//import { ErrorMsgDialogComponent } from '../../error-msg-dialog/error-msg-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router,
    //private errorMsgDialogComponent: ErrorMsgDialogComponent
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedOut()) {
      window.alert("Access not allowed!");
      //this.errorMsgDialogComponent.catchAuthError('Hozzáférés megtagadva!')
      this.router.navigate([''])
    }
    return true;
  }
}
