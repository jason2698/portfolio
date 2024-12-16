import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  constructor(private viewportScroller: ViewportScroller){}

  openResume(){
    window.open('/JASON-J-Resume.pdf')
  }

  scrollTo(data:string){
    this.viewportScroller.scrollToAnchor(data)
  }

  goToLinkedin(){
    window.open("https://www.linkedin.com/in/jason-j-2698-j/", '_blank')
  }

  goToGithub(){
    
  }
}
