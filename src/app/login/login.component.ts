import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';
import * as firebase from 'firebase';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public error: any;
  constructor(private af: AngularFire, private router: Router) { }

  ngOnInit() {
     this.af.auth.subscribe(auth => {
        if(auth) {
            this.router.navigate(['/home']);
        } else {}
    });
 }
  onSubmit(formData) {
    if(formData.valid) {
      this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
        console.log(success);
        this.router.navigate(['/home']);
      }).catch(
        (err) => {
        console.log(err);
        this.error =err.message;
        this.router.navigate(['/login']);
        
      })
    } else {
      this.error = 'Your form is invalid';
    }
  }
}
