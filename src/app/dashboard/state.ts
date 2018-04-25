import { Action } from '@ngrx/store';

import { Video } from './type';

const GOT_VIDEO_LIST = 'GOT_VIDEO_LIST';
export class GotVideoListAction implements Action {
  type = GOT_VIDEO_LIST;

  constructor(public payload: Video[]) { }
}

export interface DashboardState {
  videoList: Video[];
}

const initialState: DashboardState = {
  videoList: []
};

export function dashboardReducer(
  state: DashboardState = initialState,
  action: Action): DashboardState {
  switch (action.type) {
    case GOT_VIDEO_LIST:
      return {
        videoList: (action as GotVideoListAction).payload
      };
    default:
      return state;
  }
}