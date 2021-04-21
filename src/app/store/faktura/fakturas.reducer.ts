import {Action, createReducer, on} from '@ngrx/store';

import * as actions from './fakturas.actions';
import {FakturasState, initialState} from './fakturas.model';
import {fakturas} from '../../core/config/fakturas';

const reducer = createReducer(
  initialState,
  on(actions.getFakturas, (state, {fakturas}) =>
    ({
      ...state,
      fakturas,
    })
  ),
  on(actions.getSellers, (state, {sellers}) =>
    ({
      ...state,
      sellers,
    })
  ),
  on(actions.getFakturasBySeller, (state, {seller}) =>
    ({
      ...state,
      filteredFakturas: state.fakturas.filter(faktura => faktura.seller === seller),
    })
  ),
  on(actions.getCurrentFaktura, (state, {id}) =>
    ({
      ...state,
      selectedFaktura: state.fakturas.filter(faktura => faktura.id == id)
    })
  ),
  on(actions.resetCurrentFaktura, (state) =>
    ({
      ...state,
      selectedFaktura: []
    })
  ),
  on(actions.editSeller, (state, {seller}) =>
    ({
      ...state,
      sellers: [
        ...state.sellers.filter(sel => sel.id !== seller.id),
        ...state.sellers.filter(sel => sel.id === seller.id).map(sel => sel = seller)
      ],
      fakturas: [...state.fakturas.filter(faktura => faktura.seller.id !== seller.id),
        ...state.fakturas.filter(faktura => faktura.seller.id === seller.id).map(faktura => ({...faktura, seller}))]
    })
  ),
  on(actions.resetFilteredFaktura, (state) =>
    ({
      ...state,
      filteredFakturas: [],
    })
  ),
  on(actions.addFaktura, (state, {faktura}) =>
    ({
      ...state,
      fakturas: [...state.fakturas, faktura]
    })
  ),
);

export function fakturasReducer(
  state: FakturasState | undefined,
  action: Action
): FakturasState {
  return reducer(state, action);
}
