import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  goToLinkedin(){
    window.open("https://www.linkedin.com/in/jason-j-2698-j/", '_blank')
  }
}
