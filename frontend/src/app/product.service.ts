import { Subject } from 'rxjs/Rx';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class ProductService {

  BASE_URL = 'http://localhost:2747/api';

    private productStore = [];

    private productSubject = new Subject();

    products = this.productSubject.asObservable();

  constructor(private http: Http, private sb: MatSnackBar, private auth: AuthService, private router: Router) { }

  getProducts (type) {
    type = (type) ? '/' + type : '';
    this.http.get(this.BASE_URL + '/products'  + type).subscribe( response => {
        this.productStore = response.json();
        this.productSubject.next(this.productStore);
    }, error => {
        this.handleError('Unable to retrieve the list of Product. Server was Unreachable!');
    });
  }

  private handleError(error) {
    console.error(error);
    this.sb.open(error, 'close', {duration: 10000});
  }
}
