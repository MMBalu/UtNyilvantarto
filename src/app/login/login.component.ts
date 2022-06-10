import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OpenErrorDialog } from '../error-msg-dialog/error-msg-dialog.component';
import { User } from '../models/User';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  form:FormGroup;

  constructor(private fb:FormBuilder, 
               private authService: AuthService, 
               private router: Router,
               private openErrorDialog: OpenErrorDialog
  ) {
      this.form = this.fb.group({
          email: ['',Validators.required],
          password: ['',Validators.required]
      });
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  async login() {
      const val = this.form.value;

      if (val.email && val.password) {
        let res = undefined;
        
        res = await this.authService.login(val.email, val.password)

        if(res){
          this.router.navigate([''])  //this.router.navigate(['login'])
        } else {
          this.openErrorDialog.simpleError(["Hibás felhasználónév vagy jelszó!"]);
        }
      }
  }

  async signUp() {
    const val = this.form.value;

      if (val.email && val.password) {
        let user: User = {
          id: "",
          email: val.email,
          password: val.password
        }
        let res = undefined;
        
        res = await this.authService.post(user)

        if(res){
          this.openErrorDialog.simpleInfo("Info.", ["Sikeres regisztráció!"])
        } else {
          //this.openErrorDialog.simpleError(["Hibás felhasználónév vagy jelszó!"]);
        }
      }
  }
}
