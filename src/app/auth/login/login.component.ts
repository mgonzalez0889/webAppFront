import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "@data/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  constructor(private loginService: AuthService,
              private route: Router,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForms();
  }

  private loginForms() {
    this.login = this.fb.group({
      client_id: 2,
      client_secret: 'I1qWSJebx7y6lEIbQAzsXxndSdx3KM5GEBKsA4dO',
      grant_type:['password'],
      username:['', [Validators.required, Validators.email]],
      password:[]
    });
  }

  loginUser( data ) {
    this.loginService.login( data  )
      .subscribe( rest => {
      console.log(rest);
      this.route.navigate(['/pages/biblioteca']);
      });
  }



}
