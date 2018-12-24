import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  feature: string

  onNavigate(feature: string) {
    console.log("In App"+ feature)
    this.feature = feature
  }
}
