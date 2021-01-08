import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  passwordVal: any = [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(20),
    Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])(?=.*?^[A-Za-z0-9!<>?/{}\|+-_=@#%$^*()]*$)/)
];
  constructor(private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      // username: new FormControl('', myGlobals.req),
      mobile: ['',  Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^[6-9][0-9]{9}$/)],
      password: new FormControl('', this.passwordVal),
    });
  }

  register() {
    this.router.navigate(['/register']);
  }

  login() {
    if(this.loginForm.value.mobile != '', this.loginForm.value.password != ''){
      this.router.navigate(['/home']);
    }else {
      // this.toastr.warning('Please try again later', null);
      console.log("Please fill data");
    }
  }
}
