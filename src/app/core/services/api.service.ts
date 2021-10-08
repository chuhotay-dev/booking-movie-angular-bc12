import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

let baseUrl = '';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {
    baseUrl = environment.baseUrl;
  }

  get(endpoint: string): Observable<any> {
    return this.http.get(baseUrl + endpoint).pipe(catchError(this.handleError));
  }

  post(endpoint: string, data: any): Observable<any> {
    return this.http.post(baseUrl + endpoint, data).pipe(catchError(this.handleError));
  }

  handleError(error: any) {
    switch (error.status) {
      case 300:
        break;

      case 400:
        break;

      case 404:
        alert(error.message);
        break;

      case 401:
        break;

      case 500:
        break;
    
      default:
        break;
    }
    return throwError(error)
  }
}
