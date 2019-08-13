import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'Website';

  prepareRoute(outlet: RouterOutlet) {
    if(outlet && outlet.activatedRoute) {
      return outlet && outlet.activatedRoute &&
      outlet.activatedRouteData['animation'];
    }
  }

  resetWindow() {
    window.scrollTo(0, 0);
  }
}
