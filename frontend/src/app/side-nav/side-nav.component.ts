import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;


  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  openMenu() {
    this.trigger.openMenu();
  }

}
