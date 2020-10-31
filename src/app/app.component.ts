import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnTheGo';
  pageNumber = 1;
  userName: string;
  userLoggedIn = false;

  onLogIn(userName: string): void {
    this.userName = userName;
    this.pageNumber = 3;
    this.userLoggedIn = true;
  }
}
