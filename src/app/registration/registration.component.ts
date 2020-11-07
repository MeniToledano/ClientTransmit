import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {User} from './user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @Output() pageNumber: EventEmitter<number> = new EventEmitter<number>();
  userNameForm = new FormControl('', [Validators.required]);
  emailForm = new FormControl('', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]);
  passwordForm = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{8,20}$')]);
  phoneForm = new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]);
  firstNameForm = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]{2,30}$')]);
  lastNameForm = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]{2,30}$')]);
  @Output() userName: EventEmitter<string> = new EventEmitter<string>();
  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }
  getUserErrorMessage(): string{
    if (this.userNameForm.hasError('required')) {
      return 'You must enter a value';
    }
  }
  getEmailErrorMessage(): string {
    if (this.emailForm.hasError('required')) {
      return 'You must enter a value';
    }
    return this.emailForm.hasError('pattern') ? 'Not a valid email' : '';
  }
  getPasswordErrorMessage(): string{
    if (this.passwordForm.hasError('required')){
      return 'You must enter a value';
    }
    return this.passwordForm.hasError('pattern') ? 'password length must be 8-20' : '';
  }
  onClickRegistration(): void {
    if ( this.validateAll()) {
      this.userService.onRegistration(this.userNameForm.value, this.passwordForm.value, this.firstNameForm.value, this.lastNameForm.value,
        this.emailForm.value, this.phoneForm.value).then(
        (response: Response) => {
          this.userName.emit(this.userService.user.getUserName);
        }
      );
    }
  }
  validateAll(): boolean{
    if (this.userNameForm.invalid || this.passwordForm.invalid || this.emailForm.invalid || this.phoneForm.invalid ||
      this.firstNameForm.invalid || this.lastNameForm.invalid){
      this.userNameForm.markAllAsTouched();
      this.passwordForm.markAllAsTouched();
      this.emailForm.markAllAsTouched();
      this.phoneForm.markAllAsTouched();
      this.lastNameForm.markAllAsTouched();
      this.firstNameForm.markAllAsTouched();
      return false;
    }
    return true;
  }
  onClickCancel(): void {
    this.pageNumber.emit(1);
  }


  getPhoneErrorMessage(): string {
    if (this.phoneForm.hasError('required')){
      return 'You must enter a value';
    }
    return this.phoneForm.hasError('pattern') ? 'Israeli phone number only' : '';
  }
  getFirstNameErrorMessage(): string {
    if (this.firstNameForm.hasError('required')){
      return 'You must enter a value';
    }
    return this.firstNameForm.hasError('pattern') ? 'characters only' : '';
  }
  getLastNameErrorMessage(): string {
    if (this.lastNameForm.hasError('required')){
      return 'You must enter a value';
    }
    return this.lastNameForm.hasError('pattern') ? 'characters only' : '';
  }
}
