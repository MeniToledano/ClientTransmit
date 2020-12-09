import { HttpErrorInterceptor } from './interceptor/http-error.interceptor';

describe('HttpError', () => {
  it('should create an instance', () => {
    expect(new HttpErrorInterceptor()).toBeTruthy();
  });
});
