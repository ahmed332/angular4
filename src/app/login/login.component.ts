// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterLink } from '@angular/router';
// import { Router } from '@angular/router';


// @Component({
//   selector: 'app-login',
//   imports: [FormsModule, RouterLink],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {
//   constructor(private router: Router) {}

//   formValues = {
//     email: '',
//     password: ''
//   }
  

//   handleSubmitForm(form: any) {
//     if (form.invalid) {
//       form.form.markAllAsTouched();
//       return;
//     }

//     console.log('Form Submitted:', this.formValues);
//     this.router.navigate(['/']);
//   }

// }

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  submitted: boolean = false;

  onSubmit(loginForm: any) {
    this.submitted = true;
    
    if (loginForm.valid) {
      alert('Login Successful!');
    }
  }
}