import { Component, OnInit } from '@angular/core';
import {
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fa: any = {
    user: faUser
  };
  constructor(private as: AuthService) { }

  ngOnInit() {
  }
  
  login(form){
    let data = form.value
    this.as.login(data.email, data.password).then(result => console.log(result)).catch(err => console.log(err))
  }

}
