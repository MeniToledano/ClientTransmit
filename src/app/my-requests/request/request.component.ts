import {Component, Inject, Input, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit{

  @Input() item = 'fridge ';
  @Input() from = 'Ashdod';
  @Input() to = 'TLV';
  @Input() status = 'PENDING';
  @Input() msg = 'I need to move the fridge, its located at 3rd floor and needs to be moved to tel aviv at first floor. There’s an elevator, but it wont fit.';

  constructor(){ }

  ngOnInit(): void {
  }

}

