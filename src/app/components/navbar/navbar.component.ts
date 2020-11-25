import { Component, OnInit, Input, HostListener } from '@angular/core';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
const STICKY_POINT = 90;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  position: string;

  signInAlt = faSignInAlt;
  userPlus = faUserPlus;

  isOpen: boolean = false
  isUser: boolean = false

  navbarSticky: boolean;

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;

    if (windowScroll >= STICKY_POINT) {
      this.navbarSticky = true;
    } else {
      this.navbarSticky = false;
    }
  }

  constructor(private as: AuthService) { }

  ngOnInit() {
    this.as.user.subscribe(user => {
      if (user) {
        this.isUser = true
        this.as.userId = user.uid
      }
      else {
        this.isUser = false
        this.as.userId = ''
      }
    })
  }

  toggleNavbar() {

    this.isOpen = !this.isOpen
  }

  logout(){
    this.as.logout()
  }

}
