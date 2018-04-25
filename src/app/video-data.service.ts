import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from './dashboard/type';
import { Observable } from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { DashboardState, GotVideoListAction } from './dashboard/state';
//this is adding the service
const URL = 'https://api.angularbootcamp.com/videos';
//this is what makes it a service
@Injectable()
export class VideoDataService {
 
  constructor(private http: HttpClient, private store: Store<{ dashboard: DashboardState }>) { }
 
  obtainVideos(): void {
     this.http.get<Video[]>(URL)
    .pipe(
      map(videos => videos.filter(video => video.title.startsWith('Angular')))    
    ).subscribe(videos => this.store.dispatch(new GotVideoListAction(videos)));
  }
  getVideo(id: string): Observable<Video> {
        return this.http.get<Video>(`${URL}/${id}`);
   }

}
