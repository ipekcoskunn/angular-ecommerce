import { Component, OnInit } from '@angular/core';
import {
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  fa: any = {
    user: faUser
  };

  errorMessage: ''

  constructor(private as: AuthService, private us: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  signup(form){
    let data: User = form.value
    this.as.signup(data.email, data.password)
    .then(reault => {
      this.errorMessage = ''
      this.us.addNewUser(reault.user.uid, data.name, data.address).then(() => {
        this.router.navigate(['/'])
      })

    })
    .catch(err => {
      this.errorMessage = err.message
    })
  }

}
