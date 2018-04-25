import { Component, Input, SimpleChange } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { combineLatest, map, pluck, startWith, switchMap, tap } from 'rxjs/operators';
import { Video } from '../type';
import { VideoDataService } from '../../video-data.service';



@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css']
})
export class StatFiltersComponent {
  searchControl: FormControl;
  video: Observable<Video>;
  matches: Observable<boolean>;
  
  constructor(route: ActivatedRoute, videoSvc: VideoDataService) {
    this.searchControl = new FormControl('', Validators.minLength(3));
  
   // note: firstChild is null when redirecting. Needs more thought
   this.video = route.params.pipe(
       pluck<{}, string>('videoId'),
      tap(id => console.log({ id })),
       switchMap(id => videoSvc.getVideo(id))
     );
     this.matches = this.searchControl.valueChanges.pipe(
       startWith(this.searchControl.value),
       combineLatest(this.video),
       map(([searchValue, video]) => {
         return !!searchValue && !!video && video.title.includes(searchValue);
       })
     );
  }
 }
}
