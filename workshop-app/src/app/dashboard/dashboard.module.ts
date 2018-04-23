import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VideoDashboardComponent, VideoListComponent, VideoPlayerComponent, StatFiltersComponent],
  exports: [VideoDashboardComponent]
})
export class DashboardModule { }