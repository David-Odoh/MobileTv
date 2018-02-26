import { Component, OnInit } from '@angular/core';
import { VideoService } from './../video.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos;
  constructor(private videoservice: VideoService, private route: ActivatedRoute) { }

  video = {
    id: '',
    category: '',
    url: ''
    };


  ngOnInit() {
    this.video.id = this.route.snapshot.params.name;
    this.videoservice.getVideoObservable('');
  }

  delete(id) {
    if (confirm('Sure you want to delete this video?')) {
      this.videoservice.delete(id);
    }
  }
}
