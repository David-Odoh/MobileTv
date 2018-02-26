import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-manage-videos',
  templateUrl: './manage-videos.component.html',
  styleUrls: ['./manage-videos.component.css']
})
export class ManageVideosComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

 constructor(private route: ActivatedRoute, private videoService: VideoService, private auth: AuthService) {

 }

  ngOnInit() {
    let name = this.route.snapshot.params.name;
  }

  post() {

  }
}

