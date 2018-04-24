import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css']
})
export class StatFiltersComponent implements OnInit {
  searchControl: FormControl;
  constructor() {
    this.searchControl = new FormControl('', Validators.minLength(3));
   }

  ngOnInit() {
  }

}
