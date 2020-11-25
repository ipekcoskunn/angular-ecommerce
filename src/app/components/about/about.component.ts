import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  features: object[] = [
    { icon: 'phone', title: 'Responsive' },
    { icon: 'settings', title: 'Customizable' },
    { icon: 'award', title: 'Clean Code' },
    { icon: 'star', title: 'Creative' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
