import { createFeatureSelector, createSelector } from '@ngrx/store';


export const selectNewsState = createFeatureSelector<NewsState>(featureKey);

export const selectNews = createSelector(
  selectNewsState,
  (state) => state.news
);

export const selectLoading = createSelector(
  selectNewsState,
  (state) => state.loading
);
