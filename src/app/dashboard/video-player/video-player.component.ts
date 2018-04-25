import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, pluck, share, switchMap } from 'rxjs/operators';
import { VideoDataService } from '../../video-data.service';
import { Video } from '../type';
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent {
  video: Observable<Video>;

  constructor(route: ActivatedRoute, videoSvc: VideoDataService) {
    this.video = route.params.pipe(
      pluck<{}, string>('videoId'),
      switchMap(id => videoSvc.getVideo(id)),
      share()
    );
  }
}
