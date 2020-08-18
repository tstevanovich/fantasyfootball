import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // navigation
  navLinks = [
    { link: 'rankings', label: 'Rankings' },
    { link: 'draft', label: 'Draft' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
