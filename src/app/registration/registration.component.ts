import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {User} from './user';
import {Router} from '@angular/router';
import {StorageManagerService} from '../services/storage-manager.service';
import {Login} from '../login/login';

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
  userAlreadyExist = false;
  @Output() userName: EventEmitter<string> = new EventEmitter<string>();
  user: User;

  constructor(public userService: UserService,
              private router: Router,
              private storageManagerService: StorageManagerService) {
  }

  ngOnInit(): void {
  }

  getUserErrorMessage(): string {
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

  getPasswordErrorMessage(): string {
    if (this.passwordForm.hasError('required')) {
      return 'You must enter a value';
    }
    return this.passwordForm.hasError('pattern') ? 'password length must be 8-20' : '';
  }

  onClickRegistration(): void {
    if (this.validateAll()) {
      this.user = new User();
      this.user._userName = this.userNameForm.value;
      this.user._password = this.passwordForm.value;
      this.user._firstName = this.firstNameForm.value;
      this.user._lastName = this.lastNameForm.value;
      this.user._email = this.emailForm.value;
      this.user._phone = this.phoneForm.value;

      this.userService.onRegistration(this.user).then(
        (response: string) => {
          if (response === 'User name already exist') {
            this.userAlreadyExist = true;
          } else if (response === 'somethingWentWrong') {
            this.router.navigate(['login']);
          }else {
            this.storageManagerService.setData('credentials', JSON.stringify(new Login(this.user._userName, this.user._password)));
            this.router.navigate(['dashboard']);
          }
        }
      );
    }
  }

  validateAll(): boolean {
    if (this.userNameForm.invalid || this.passwordForm.invalid || this.emailForm.invalid || this.phoneForm.invalid ||
      this.firstNameForm.invalid || this.lastNameForm.invalid) {
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
    this.router.navigate(['login']);

  }

  getPhoneErrorMessage(): string {
    if (this.phoneForm.hasError('required')) {
      return 'You must enter a value';
    }
    return this.phoneForm.hasError('pattern') ? 'Israeli phone number only' : '';
  }

  getFirstNameErrorMessage(): string {
    if (this.firstNameForm.hasError('required')) {
      return 'You must enter a value';
    }
    return this.firstNameForm.hasError('pattern') ? 'characters only' : '';
  }

  getLastNameErrorMessage(): string {
    if (this.lastNameForm.hasError('required')) {
      return 'You must enter a value';
    }
    return this.lastNameForm.hasError('pattern') ? 'characters only' : '';
  }
}
