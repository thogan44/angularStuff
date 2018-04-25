import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {Video} from '../type';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { startWith, map } from 'rxjs/operators';


@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css']
})
export class StatFiltersComponent {
  searchControl: FormControl;
  id: Observable<string>;
  matches: Observable<boolean>;
  
  constructor(route: ActivatedRoute) {
    this.id = route.params.pipe(map(params => params.videoId));
    this.searchControl = new FormControl('', Validators.minLength(3));
   }

   //ngOnChanges(changes: SimpleChanges): void {
    //this.matches = this.searchControl.valueChanges.pipe(
      //startWith(this.searchControl.value),
      //map(searchValue => {
        //return !!this.video && this.video.title.includes(searchValue);
      //})
    //);
  //}

}
