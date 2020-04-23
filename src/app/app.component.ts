import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myMessage = "Hello, I am from Attribute directive";
  title = 'PoolCarz';
}
