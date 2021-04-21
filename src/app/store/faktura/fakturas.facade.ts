import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppState } from 'app/state';

import * as actions from './fakturas.actions';
import * as selectors from './news.selectors';

@Injectable()
export class FakturasFacade {
  public fakturas$ = this.store.select(selectors.selectNews);
  public loading$ = this.store.select(selectors.selectLoading);

  constructor(private store: Store<AppState>) {}

  public getNews(newsChannelId: string | number): void {
    this.store.dispatch(actions.getNews({ newsChannelId }));
  }

  public getNewsByKeyWord(keyword: string, newsChannelId: string | number ): void {
    this.store.dispatch(actions.getNewsByKeyWord({ keyword, newsChannelId}));
  }
}
