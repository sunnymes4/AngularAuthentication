import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../shared/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private authenticationService: AuthenticationService, private router:Router) { }

  ngOnInit() {
    this.intializedashboardForm();
  }

  public intializedashboardForm() {
    this.loginForm = this.formBuilder.group({
      username:['', Validators.required],
      password:['', Validators.required]
    })
  }

  login(){
    
    this.authenticationService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value).subscribe(data => {
        
        this.router.navigate(['pages/dashboard'])
      
    },
  error => {
    debugger
    alert(error.error_description);
  })
  }

}
