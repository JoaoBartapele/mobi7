import { Component } from '@angular/core';
import { Animations } from '@shared/animations';

@Component({
  selector: 'm7-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [Animations.rotateOnClick]
})
export class AppComponent {
  title = 'mobi7';
}
