import { Component, HostListener, OnInit } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  isMenu1Open: boolean = false;
  isMenu2Open: boolean = false;
  isMenu3Open: boolean = false;
  isSidenavOpen: boolean = false;
  innerWidth: any = screen.width;

  constructor(public responsive: BreakpointObserver) {}
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }
  ngOnInit() {
    this.responsive
      .observe([Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log(
            'This is the Handset Portrait point at max-width: 599.98 px and portrait orientation.'
          );
          console.log(state);
        }
      });
  }
}
