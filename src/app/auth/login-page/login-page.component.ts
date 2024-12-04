import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthapiService } from '../../core/services/auth/authapi/authapi.service';
import { ToastrService } from 'ngx-toastr';
import { MateriallistModule } from '../../shared/materiallist/materiallist.module';

@Component({
  selector: 'app-login-page',
  imports: [MateriallistModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  _AuthService = inject(AuthapiService);
  _router = inject(Router);
  _toastr = inject(ToastrService);
  showPassword: boolean = false;


  constructor() { }

  loginForm: FormGroup = new FormGroup<any>({
    email: new FormControl('satendra@ssbrinet.com', [Validators.email, Validators.required,]),
    password: new FormControl('123456', [Validators.minLength(4)])
  })

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // Method to handle form submission
  LoginSumbit() {
    debugger
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
        this._router.navigate(["/dashboard/overview"]);
      // this._AuthService.loginUser(this.loginForm.value).subscribe({
      //   next: (response) => {
      //     console.log("Loging", response);
      //     if (response.user.designation === "admin") {
      //       this._router.navigate(["/dashboard/overview"]);
      //       // sessionStorage.setItem("Admin", response.user.designation);
      //       this._toastr.success(`Admin Login Sucessful!`);
      //     } else if (response.user.designation === "user") {
      //       this._router.navigate(["/dashboard/overview"]);
      //       this._toastr.success(`User Login Sucessful!`);
      //     }

      //     this._AuthService.isLoggedIn.update(() => true);
      //   }, error: (err) => {
      //     this._toastr.error('Email or password is not valid!');
      //   },
      // });

      this.loginForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }

  // Helper method to check if a field is valid and touched
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
