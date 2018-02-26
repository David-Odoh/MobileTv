import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AuthService {

  BASE_URL = 'http://localhost:2747/auth';
  NAME_KEY = 'name';
  TOKEN_KEY = 'token';


  constructor(private http: Http, private router: Router, private sb: MatSnackBar, private http2: HttpClient) { }

  get name() {
    return localStorage.getItem(this.NAME_KEY);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }


  login(loginData) {
    this.http.post(this.BASE_URL + '/login', loginData).subscribe(res => {
      this.authenticate(res);
    }, error => {
      this.handleError(error);
  });
  }

  register(user) {
    delete user.confirmPassword;
    this.http.post(this.BASE_URL + '/register', user)
    // .map(res => {
    //   // If request fails, throw an Error that will be caught
    //   if (res.status < 200 ) {
    //     throw new Error('This request has failed ' + res.status);
    //   }
    //   // If BadRequest
    //   if (res.status === 400) {
    //     this.handleError('This User may already exit. Try a different email address: ' + res.status);
    //   }
    //   // If NotFound
    //   if (res.status === 404) {
    //     this.handleError('No data was received. Try again!' + res.status);
    //   }  else {
    //     return res.json();
    //   }
    // })
    .subscribe(res => {
      this.authenticate(res);
    },  error => {
      this.handleError(error);
  });
  }

  logout() {
    // localStorage.removeItem(this.TOKEN_KEY);
    // localStorage.removeItem(this.NAME_KEY);
    localStorage.clear();
    this.router.navigate(['/']);
  }

  authenticate(res) {
    const authResponse = res.json();

       if (!authResponse) { return; }

       localStorage.setItem(this.TOKEN_KEY, authResponse.token);
       localStorage.setItem(this.NAME_KEY, authResponse.firstName);
       this.router.navigate(['/']);
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message : `This User may already exit. 
    Try a different email address. Status Code: ` + error.status;
    console.error(errMsg);
    this.sb.open(errMsg, 'close', {duration: 10000});
  }
}
