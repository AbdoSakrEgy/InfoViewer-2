import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  isMenu1Open: boolean = false;
  isMenu2Open: boolean = false;
  isMenu3Open: boolean = false;
  isSidenavOpen: boolean = true;
  innerWidth: any = screen.width;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }
}
