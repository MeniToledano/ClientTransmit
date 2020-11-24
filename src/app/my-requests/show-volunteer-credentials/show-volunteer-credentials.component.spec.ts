import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShowVolunteerCredentialsComponent} from './show-volunteer-credentials.component';

describe('ShowVolunteerCredentialsComponent', () => {
  let component: ShowVolunteerCredentialsComponent;
  let fixture: ComponentFixture<ShowVolunteerCredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowVolunteerCredentialsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowVolunteerCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
