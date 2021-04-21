import { HttpErrorResponse } from '@angular/common/http';

import { createAction, props } from '@ngrx/store';

import { News } from './news.model';

export const getNews = createAction(
  '[News] Get News',
  props<{ newsChannelId: string | number }>()
);
export const getNewsSuccess = createAction(
  '[News] Get News Success',
  props<{ news: News[], maxNewsCount: number}>()
);
export const getNewsFail = createAction(
  '[News] Get News Fail',
  props<{ error: HttpErrorResponse }>()
);

export const getNewsByKeyWord = createAction(
    '[News] Get News By Keyword',
    props<{ newsChannelId: string | number, keyword: string}>()
);
export const getNewsByKeyWordSuccess = createAction(
    '[News] Get News By Keyword Success',
    props<{ news: News[], maxNewsCount: number }>()
);
export const getNewsByKeyWordFail = createAction(
    '[News] Get News By Keyword Fail',
    props<{ error: HttpErrorResponse }>()
);
