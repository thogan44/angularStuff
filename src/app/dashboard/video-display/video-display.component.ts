import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../type';

@Component({
  selector: 'app-video-display',
  templateUrl: './video-display.component.html',
  styleUrls: ['./video-display.component.css']
})
export class VideoDisplayComponent implements OnInit {
    @Input() video: Video;
    @Input() selected: boolean;
  constructor() { }

  ngOnInit() {
  }

}
