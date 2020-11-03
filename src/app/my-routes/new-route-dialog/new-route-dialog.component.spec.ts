import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRouteDialogComponent } from './new-route-dialog.component';

describe('NewRouteDialogComponent', () => {
  let component: NewRouteDialogComponent;
  let fixture: ComponentFixture<NewRouteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRouteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRouteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
