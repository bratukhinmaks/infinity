import { createAction, props } from '@ngrx/store';

import {FakturasModel, Seller} from './fakturas.model';

export const getFakturas = createAction(
  '[Fakturas] Get Fakturas',
  props<{ fakturas: FakturasModel[]}>()
);

export const getSellers = createAction(
  '[Fakturas] Get Sellers',
  props<{ sellers: Seller[]}>()
);

export const getFakturasBySeller = createAction(
    '[Fakturas] Get Fakturas By Sellers',
    props<{ seller: Seller }>()
);

export const addFaktura = createAction(
  '[Fakturas] Add faktura',
  props<{ faktura: FakturasModel}>()
);

export const editSeller = createAction(
  '[Fakturas] Edit faktura',
  props<{ seller: Seller}>()
);

export const getCurrentFaktura = createAction(
  '[Fakturas] Get current faktura',
  props<{ id: number}>()
);

export const resetCurrentFaktura = createAction(
  '[Fakturas] Reset current faktura'
);

export const resetFilteredFaktura = createAction(
  '[Fakturas] Reset filtered faktura'
);
