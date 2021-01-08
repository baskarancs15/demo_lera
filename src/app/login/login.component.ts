import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';

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
    private toastr: ToastrService,
    private apiService: ApiService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      mobile: new FormControl(null, [Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^[6-9][0-9]{9}$/)]),
      // mobile: ['',  Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^[6-9][0-9]{9}$/)],
      password: new FormControl(null, this.passwordVal),
    });
  }

  register() {
    this.router.navigate(['/register']);
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    if(this.loginForm.value.mobile != null && this.loginForm.value.password != null){
      const ObjData = {
        "mobilenumber": this.loginForm.value.mobile
        // "password": this.loginForm.value.password
      }
      this.apiService.login(ObjData)
      .subscribe((loginresult: any) => {
        if(loginresult != null){
          this.router.navigate(['/home/dashboard/default']);
        }else{
          this.toastr.warning('Invalid Credentials');
        }
      });
    }else {
      this.loginForm.reset();
      this.toastr.warning('Please fill all feilds');
    }
  }
}
