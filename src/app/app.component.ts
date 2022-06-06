
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet, RouterState } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(){ 
  }

  @ViewChild( 'data' ) data!: RouterOutlet;

  title = 'UtNyilvantarto';

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
