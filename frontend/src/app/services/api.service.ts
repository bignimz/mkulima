import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, throwError } from 'rxjs';
import { map,tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Userr, User, signupModel } from '../models/register/register';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _isLoggedin = new BehaviorSubject<boolean>(false);

    isLoggedin=this._isLoggedin.asObservable();

    // user = new BehaviorSubject<Userr>(null);

    private url = `${environment.apiUrl}`;
  register: any;

  constructor(private http: HttpClient, private route: Router) { 
    const token = localStorage.getItem('accessToken');
    this._isLoggedin.next(!!token);
  }

  signupUser(user: signupModel){
    return this.http.post<User>(`${this.url}/register/`,user)
    .pipe(catchError(this.handleError), tap((res)=>{
      console.log(res)
    }))
  }

  private handleError(error: HttpErrorResponse){
    console.log(error)
    let errormessage = 'An unknown error occured'
    if(!error.error){
        return throwError(errormessage)
    }
    if(error.error.non_field_errors){
        errormessage = error.error.non_field_errors[0]
    }
    if(error.error.email){
        errormessage = error.error.email[0]
    }
    if(error.error.username){
        errormessage = error.error.username[0]
    }
    return throwError(errormessage);
  }

}
