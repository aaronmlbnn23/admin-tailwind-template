import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss']
})
export class MainAppComponent implements OnInit {
  events: string[] = [];
  opened: boolean = true;

  @ViewChild(MatSidenav)
  SideNav!: MatSidenav;

  constructor(private observer: BreakpointObserver) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 1040px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.SideNav.mode = 'over';
          this.SideNav.close();
        } else {
          this.SideNav.mode = 'side';
          this.SideNav.open();
        }
      });
  }
}
