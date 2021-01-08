import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    private formBuilder: FormBuilder,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[6-9][0-9]{9}$/)]),
      // mobile: ['',  Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^[6-9][0-9]{9}$/)],
      password: new FormControl('', this.passwordVal),
    });
  }

  register() {
    this.router.navigate(['/register']);
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    if (this.loginForm.value.mobile != '', this.loginForm.value.password != '') {
      this.router.navigate(['/home']);
    } else {
      this.loginForm.reset();
      this.toastr.warning('Please fill all feilds');
    }
  }
}
