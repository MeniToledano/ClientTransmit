import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  @Output() clickRegistration: EventEmitter<number> = new EventEmitter<number>();
  @Output() clickLogin: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  onClickRegistration(): void {
    this.clickRegistration.emit(2);
  }

  onClickLogin(userName: string): void{
    if (userName.length > 0) {
      this.clickLogin.emit(userName);
    }
  }
}
