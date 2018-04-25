import { Component, Input } from '@angular/core';
import { Video } from '../type';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent {
  id: Observable<string>;
  constructor(route: ActivatedRoute) {
    this.id = route.params.pipe(map(params => params.videoId));
   }

  ngOnInit() {
  }

}
