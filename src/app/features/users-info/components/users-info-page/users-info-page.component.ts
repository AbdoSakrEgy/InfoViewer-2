import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-users-info-page',
  templateUrl: './users-info-page.component.html',
  styleUrls: ['./users-info-page.component.css'],
})
export class UsersInfoPageComponent {
  innerWidth: any = screen.width;
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }
}
