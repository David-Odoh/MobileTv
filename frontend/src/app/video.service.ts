import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Injectable()
export class VideoService {
  BASE_URL = 'http://localhost:2747/api';

  private videoStoreOBS = [];

  private videoSubjectOBS = new Subject();

  videosOBS = this.videoSubjectOBS.asObservable();

  constructor(private http: Http, private sb: MatSnackBar, private http2: HttpClient, private auth: AuthService, private router: Router) {
  }

  getVideos() {
   try {
      return this.http.get(this.BASE_URL + '/videos').toPromise();
    } catch (error) {
      this.handleError('Unable to retrieve videos. Server is Unavailable');
  }
  }

  getVideoObservable (url) {
    url = (url) ? '/' + url : '';
    this.http.get(this.BASE_URL + '/videos'  + url).subscribe( response => {
        this.videoStoreOBS = response.json();
        this.videoSubjectOBS.next(this.videoStoreOBS);
    }, error => {
        this.handleError('Unable to retrieve Videos');
    });
  }

  delete(id) {
    this.http.delete(this.BASE_URL + '/videos/' + id)
    .subscribe( response => response.json());
    this.router.navigate(['/']);
    }

  private handleError(error) {
    console.error(error);
    this.sb.open(error, 'close', {duration: 10000});
  }
}

