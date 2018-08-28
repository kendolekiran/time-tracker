import { Component } from '@angular/core';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  name = 'Header Component';
  footerLinks = [
    {
      'label': 'Logo',
      'url': 'http://www.google.com'
    },
    {
      'label': 'title',
      'url': 'http://www.adp.com'
    }
  ];
}
