import { ModalLogInComponent } from './../modal-log-in/modal-log-in.component';
import { ModalComponent } from './../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private dialog: MatDialog) {}

  openDialog(){
    this.dialog.open(ModalComponent);
  }
  
  openDialogLogIn(){
    this.dialog.open(ModalLogInComponent);
  }
}
