import { Component } from '@angular/core';

@Component({
  selector: 'my-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
  name = 'Footer Component';
  footerLinks = [
    {
      'label': 'Google',
      'url': 'http://www.google.com'
    },
    {
      'label': 'ADP',
      'url': 'http://www.adp.com'
    }
  ];
}
