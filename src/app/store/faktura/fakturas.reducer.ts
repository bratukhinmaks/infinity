import { Action, createReducer, on } from '@ngrx/store';

import * as actions from './fakturas.actions';
import { initialState, NewsState } from './fakturas.model';

const reducer = createReducer(
  initialState,
  on(actions.getNews, (state, { newsChannelId }) =>
    newsChannelId === state.activeNewsChannelId
      ? state
      : {
          ...state,
          loading: true,
          activeNewsChannelId: newsChannelId,
          news: [],
          newsPaginationNumber: 1,
          areAllNewsLoaded: false,
        }
  ),
  on(actions.getNewsSuccess, (state, { news, maxNewsCount }) => {
      const allNews = [...state.news, ...news];
      return {
          ...state,
          news: allNews,
          newsPaginationNumber: state.newsPaginationNumber + 1,
          loading: false,
          areAllNewsLoaded: allNews.length >= maxNewsCount,
        };
      }),
  on(actions.getNewsFail, actions.getNewsByKeyWordFail, (state) => ({ ...state, loading: false })),

  on(actions.getNewsByKeyWord, (state, { newsChannelId , keyword}) =>
      (keyword === state.keyword && newsChannelId === state.activeNewsChannelId)
      ? state
      : {
         ...state,
         loading: true,
         activeNewsChannelId: newsChannelId,
         news: [],
         newsPaginationNumber: 1,
         areAllNewsLoaded: false,
        keyword
    }),
    on(actions.getNewsByKeyWordSuccess, (state, { news, maxNewsCount }) => {
        const allNews = [...state.news, ...news];
        return {
            ...state,
            news: allNews,
            newsPaginationNumber: state.newsPaginationNumber + 1,
            loading: false,
            areAllNewsLoaded: allNews.length >= maxNewsCount,
        };
    }),
);

export function newsReducer(
  state: NewsState | undefined,
  action: Action
): NewsState {
  return reducer(state, action);
}
