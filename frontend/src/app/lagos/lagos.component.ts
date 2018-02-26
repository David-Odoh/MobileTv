import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lagos',
  templateUrl: './lagos.component.html',
  styleUrls: ['./lagos.component.css']
})
export class LagosComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
