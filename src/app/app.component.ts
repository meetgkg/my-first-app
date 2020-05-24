import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  showSecret = false;
  log = [];

  onToggleDisplay(){
    this.log.push(this.log.length + 1);
  }
}
