import { createFeatureSelector, createSelector } from '@ngrx/store';
import {FakturasState} from './fakturas.model';


export const selecFakturasState = createFeatureSelector<FakturasState>('fakturas');

export const selectFakturas = createSelector(
  selecFakturasState,
  (state) => state.fakturas
);

export const selectSellers = createSelector(
  selecFakturasState,
  (state) => state.sellers
);

export const selectCurrentFaktura = createSelector(
  selecFakturasState,
  (state) => state.selectedFaktura
);

export const selectFilteredFaktura = createSelector(
  selecFakturasState,
  (state) => state.filteredFakturas
);
