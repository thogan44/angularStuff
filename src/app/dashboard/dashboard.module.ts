import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoDisplayComponent } from './video-display/video-display.component';

import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { VideoDataService } from '../video-data.service';


const routes: Routes = [
  { path: '', component: VideoDashboardComponent, pathMatch: 'full' }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[VideoDataService],
  declarations: [VideoDashboardComponent, 
    VideoListComponent, 
    VideoPlayerComponent, 
    StatFiltersComponent, 
    UserDashboardComponent, 
    VideoDisplayComponent]
})
export class DashboardModule { }
