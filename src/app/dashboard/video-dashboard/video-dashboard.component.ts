import { Component, OnInit } from '@angular/core';
import { Video } from '../type';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {
 currentVideo:Video;

  constructor() { }

  ngOnInit() {
  }
    setVideo(video: Video) {
        this.currentVideo = video;
   }

}
