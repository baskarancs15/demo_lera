import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  signupForm: FormGroup;
  passwordVal: any = [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(20),
    Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])(?=.*?^[A-Za-z0-9!<>?/{}\|+-_=@#%$^*()]*$)/)
  ];
  usernameVal: any = [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20),
    Validators.pattern(/^[A-Za-z0-9]*$/)
  ];

  constructor(private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.signupForm = this.formBuilder.group({
      username1: new FormControl('', this.usernameVal),
      mobile1: ['', Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[6-9][0-9]{9}$/)],
      password1: new FormControl('', this.passwordVal),
    });

  }

  signin() {
    this.router.navigate(['/login']);
  }

  signup() {
    if (this.signupForm.value.mobile1 !== '' && this.signupForm.value.password1 !== '' && this.signupForm.value.username1 !== '') {
      this.router.navigate(['/home']);
    } else {
      // this.toastr.warning('Please try again later', null);
      console.log('Please fill data');
    }
  }
  get f() {
    // console.log(this.signupForm.controls);
    return this.signupForm.controls;
  }
}

