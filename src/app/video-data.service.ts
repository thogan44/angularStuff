import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from './dashboard/type';
import {map} from 'rxjs/operators';
//this is adding the service
const URL = 'https://api.angularbootcamp.com/videos';
//this is what makes it a service
@Injectable()
export class VideoDataService {
 
  constructor(private http:HttpClient) { }
 
  getVideos(){
    return this.http.get<Video[]>(URL)
    .pipe(
      map(videos => videos.filter(video => video.title.startsWith('Angular')))    
    );
  }

}
