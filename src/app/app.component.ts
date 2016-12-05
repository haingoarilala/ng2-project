import { OnInit, Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  user:any;
  constructor(private af: AngularFire, private router: Router) { }
   ngOnInit() {
      this.af.auth.subscribe(auth => {
        if(auth) {
           this.user= auth;
           
        } else {
          this.user=null;
          
        }
    });

   }
   logout(){
      this.af.auth.logout();
      this.router.navigate(['/login']);
   }
}
