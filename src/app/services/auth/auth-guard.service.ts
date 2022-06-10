import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { OpenErrorDialog } from 'src/app/error-msg-dialog/error-msg-dialog.component';
import { AuthService } from './auth.service';
//import { ErrorMsgDialogComponent } from '../../error-msg-dialog/error-msg-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router,
    private openErrorDialog: OpenErrorDialog
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedOut()) {
      //window.alert("Access not allowed!");
      this.openErrorDialog.simpleError(['Hozzáférés megtagadva!'])
      this.authService.logout();
      this.router.navigate(['login'])
    }
    return true;
  }
}
