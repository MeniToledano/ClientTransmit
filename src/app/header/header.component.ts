import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isUserLogged: boolean;
  @Input() userName: string;
  @Output() page: EventEmitter<number> = new EventEmitter<number>();
  chosenPage = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onChoosingPage(myRequest: string): void {
    this.chosenPage = myRequest;
    if (this.chosenPage === 'myRequests') {
      this.page.emit(3);
    } else {
      this.page.emit(4);
    }
  }

  onClickSpan(): void {
    this.chosenPage = '';
    if (this.isUserLogged) {
      this.page.emit(0);
    }
  }
}
