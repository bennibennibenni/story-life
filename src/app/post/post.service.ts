import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  baseUrl = 'https://dummyapi.io/data/api';
  constructor(private http: HttpClient) {}

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'app-id': 'thvGiP7cYMUUW9sP2GjZ',
    }),
  };

  // Get All Post
  GetPostsList(): Observable<Post> {
    return this.http
      .get<Post>(this.baseUrl + '/post', this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Get Post Comment
  GetPostComment(id: string): Observable<Post> {
    return this.http
      .get<Post>(this.baseUrl + '/post/' + id + '/comment', this.httpOptions)
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
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
