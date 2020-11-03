import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from '../pages/user/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = 'https://dummyapi.io/data/api';
  constructor(private http: HttpClient) {}

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'app-id': 'IsvaxAMhFNDRv8ioOso3',
    }),
  };

  // Get All User
  GetUsersList(current: number): Observable<User> {
    return this.http
      .get<User>(this.baseUrl + '/user?page=' + current, this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Get User Full Profile
  GetFullUserProfile(id: string): Observable<User> {
    return this.http
      .get<User>(this.baseUrl + '/user/' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Get User Post
  GetUserPosts(id: string): Observable<User> {
    return this.http
      .get<User>(this.baseUrl + '/user/' + id + '/post', this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
