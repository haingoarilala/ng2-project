import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import * as firebase from 'firebase';
import { 
  AngularFireModule,
  FIREBASE_PROVIDERS,
  AuthMethods, 
  AuthProviders 
} from 'angularfire2';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HoverDirective } from './directive/hover.directive';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const firebaseConfig = {
 apiKey: "AIzaSyDj1aEiZxQ_sqpBWLQrV9Cdy-axljPkfkw",
 authDomain: "angular2-auth-afd86.firebaseapp.com",
 databaseURL: "https://angular2-auth-afd86.firebaseio.com",
 storageBucket: "angular2-auth-afd86.appspot.com"
};
export const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HoverDirective,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig,firebaseAuthConfig),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
