import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

//Declaring the api url that will provide data for the client app
const apiUrl = 'YOUR_HOSTED_API_URL_HERE/';
@Injectable({
  providedIn: 'root'
})
export class FetchApiDataService {
  // Inject the HttpClient module to the constructor params
 // This will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {
  }
 // Making the api call for the user registration endpoint
  public userRegistration(userDetails: any): Observable<any> {
		console.log(userDetails);
		return this.http.post(apiUrl + 'users', userDetails).pipe(
			catchError(this.handleError)
		);
	}

	public userLogin(userDetails: any):Observable<any> {
    return this.http.post(apiUrl + 'login', userDetails).pipe(
      catchError(this.handleError)
    )
  }

	public getAllMovies(): Observable<any> {
		const user = JSON.parse(localStorage.getItem('myFlixuser'));
    return this.http.get(apiUrl + 'movies', {
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer ' + user.token,
        })
    }).pipe(
      catchError(this.handleError)
    );
  }

private handleError(error: HttpErrorResponse): any {
	if (error.error instanceof ErrorEvent) {
  	console.error('Some error occurred:', error.error.message);
	} else {
  	console.error(
    	`Error Status code ${error.status}, ` +
    	`Error body is: ${error.error}`);
	}
	return throwError(
  	'Something bad happened; please try again later.');
  }
}
