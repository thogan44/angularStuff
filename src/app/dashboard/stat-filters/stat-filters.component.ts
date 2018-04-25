import { Component, OnChanges, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {Video} from '../type';
import { Observable } from 'rxjs/Observable';
import { startWith, map } from 'rxjs/operators';


@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css']
})
export class StatFiltersComponent implements OnChanges {
  searchControl: FormControl;
  @Input() video: Video;
  matches: Observable<boolean>;
  
  constructor() {
    this.searchControl = new FormControl('', Validators.minLength(3));
   }

   ngOnChanges(changes: SimpleChanges): void {
    this.matches = this.searchControl.valueChanges.pipe(
      startWith(this.searchControl.value),
      map(searchValue => {
        return !!this.video && this.video.title.includes(searchValue);
      })
    );
  }

}
