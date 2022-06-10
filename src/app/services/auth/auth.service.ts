import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { lastValueFrom } from 'rxjs';
import { OpenErrorDialog } from 'src/app/error-msg-dialog/error-msg-dialog.component';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private openErrorDialog: OpenErrorDialog
  ) {
  }
    
  async login(email:string, password:string ) {
    let result;
    
    try{
      result = await lastValueFrom(this.http.post<{idToken: string, expiresIn: string}>('/api/login', {email, password}));
    } catch(e){
      console.log(e);
    }

      if(result){
        this.setSession(result);
      }
      return result
  }

  async post(user: User){
    try{
       return await lastValueFrom(this.http.post<User>('/api/users', user));
    } catch (e: any) {
      this.openErrorDialog.catchHttpError(e)
      return ;
    }
  }

  async refreshToken() {
    let expiresAt = localStorage.getItem('expires_at')
    if(expiresAt && (new Date(0+expiresAt).getTime()-new Date().getTime() < 1*60)){
      return;
    }


    let result;
    let idToken = localStorage.getItem('id_token');
    try{
      result = await lastValueFrom(this.http.post<{idToken: string, expiresIn: string}>('/api/login', {idToken: idToken}));
    } catch(e){
      console.log(e);
    }
    
      if(result){
        this.setSession(result);
      }
      return result
  }

  private setSession(authResult: {idToken: string, expiresIn: string}): void{
    const expiresAt = moment().add(authResult.expiresIn,'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    //console.log(localStorage.getItem('id_token'));

  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
}

public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
}

isLoggedOut() {
    return !this.isLoggedIn();
}

getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    if(!expiration){
      return undefined;
    }
    const expiresAt: string | undefined = JSON.parse(expiration);
    return moment(expiresAt);
}    
}
