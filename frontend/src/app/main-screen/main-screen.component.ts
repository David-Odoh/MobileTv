import { VideoService } from './../video.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer: any;
  @ViewChild('mp4Source') mp4Source: any;
  videoSrc;
  videoSources = [];
  count;

  constructor(private videoservice: VideoService) { }

  async ngOnInit() {
    this.count = 0;

    let response = await this.videoservice.getVideos();
    this.videoSources = response.json();

    console.log(this.videoSources[this.count].videoUrl);
    console.log(this.videoSources.length);

    this.videoSrc = this.videoSources[this.count].videoUrl;
    this.videoplayer.nativeElement.load();

  }

  vidEnded(e) {
     if (this.count < this.videoSources.length) {
      this.count++;
      if (this.count === this.videoSources.length) {
            this.count = 0;
            this.videoSrc = this.videoSources[0].videoUrl;
             this.videoplayer.nativeElement.load();
          }
      console.log(this.count);
      this.videoSrc = this.videoSources[this.count].videoUrl;
      console.log('video ended');
      this.videoplayer.nativeElement.load();
      this.toggleVideo(e);
     }
  }

toggleVideo(event: any) {
  this.videoplayer.nativeElement.paused ? this.videoplayer.nativeElement.play() : this.videoplayer.nativeElement.pause();
  }

}
