import {Component, EventEmitter, OnInit, Output  } from '@angular/core';
import { Video } from '../type';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  //to sustanciate the objects for the front end to talk to  
  videos: Video[];
  currentVideo: Video;
  @Output('selectVideo') setSelectVideo = new EventEmitter<Video>();

  constructor(http: HttpClient) {
    http.get<Video[]>('https://api.angularbootcamp.com/videos')
    .subscribe(list => this.videos = list);
   }

  ngOnInit() {
  }

  selectVideo(video: Video) {
    this.currentVideo = video;
    this.setSelectVideo.emit(video);
  }

}
