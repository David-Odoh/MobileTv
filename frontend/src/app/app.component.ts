import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="row" id=page>
  <div class="column left" style="background-color:#aaa;">
    <router-outlet></router-outlet>
  </div>
  <!-- <div class="column right" style="background-color:#bbb;"> -->
  <div class="column right" style="background-color:#e57368;"> 
      <app-side-nav></app-side-nav>
    <app-home-side></app-home-side>
  </div>
</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
