import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { lastValueFrom } from 'rxjs';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }
    
  async login(email:string, password:string ) {
    let result;
    
    try{
      result = await lastValueFrom(this.http.post<{idToken: string, expiresIn: string}>('/api/login', {email, password}));
    } catch(e){
      console.log(e);
    }
      
    //result?.subscribe(idToken: string, expiresIn: string)
      // this is just the HTTP call, 
      // we still need to handle the reception of the token
      //.shareReplay(); //TODO ez nem működik a tutorialból
    
      
      if(result){
        this.setSession(result);
      }
      return result
  }

  private setSession(authResult: {idToken: string, expiresIn: string}): void{
    const expiresAt = moment().add(authResult.expiresIn,'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    console.log(localStorage.getItem('id_token'));

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
