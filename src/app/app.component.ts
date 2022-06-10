
import { Component, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public authService: AuthService,
    private router: Router
  ){ 
  }

  @ViewChild( 'data' ) data!: RouterOutlet;

  title = 'UtNyilvantarto';

  isLogged(): boolean {
    let loc: string| null = localStorage.getItem('expires_at');
    if(!loc){
      return false;
    }
    if(new Date(loc).getTime() < new Date().getTime()){
      return false;
    }
    return true;
  }

  logout(): void {
    this.authService.logout();
  }

  teszt(){
    //console.log(this.data.component);
    console.log(this.data.activatedRoute.toString());
    console.log(this.data.activatedRoute.params);
    //Object.toString
  }

  
  isUrlMatch(url: string): boolean {
    let ret : boolean = false;
    try{
       //this.data.activatedRoute.toString().includes(url);
      ret = this.data.activatedRoute.toString().includes("path:'" + url + "')");
       return ret;
    }catch(e){
      return false;
    }
    //this.data.activatedRoute.toString().endsWith("'" + url + "')")
   
  }

}
