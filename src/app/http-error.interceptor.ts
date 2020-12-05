import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import Instance = WebAssembly.Instance;

export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          console.log('inst: ' + error.error.constructor.name);
          if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
          } else {
            // server-side error
            if (error.status === 404) {
              throw error;
            }else{
              errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
              window.alert('Error accord!' + errorMessage);
            }
          }
          return throwError(errorMessage);
        })
      );
  }
}
