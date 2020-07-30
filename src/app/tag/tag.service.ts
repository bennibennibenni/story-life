import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Tag } from './tag';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  baseUrl = 'https://dummyapi.io/data/api';
  constructor(private http: HttpClient) {}

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'app-id': '9jFM6F2ZnlFiCYXRJlqo',
    }),
  };

  // Get All Tag List
  GetTagsList(): Observable<Tag> {
    return this.http
      .get<Tag>(this.baseUrl + '/tag?limit=50', this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Get All Post by Tag
  GetPostByTag(tagKeyword: string): Observable<Tag> {
    return this.http
      .get<Tag>(this.baseUrl + '/tag/' + tagKeyword + '/post', this.httpOptions)
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
