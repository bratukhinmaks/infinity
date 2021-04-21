import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import * as actions from './fakturas.actions';
import * as selectors from './fakturas.selectors';
import {FakturasModel, FakturasState, Seller} from './fakturas.model';

@Injectable()
export class FakturasFacade {
  public fakturas$ = this.store.select(selectors.selectFakturas);
  public sellers$ = this.store.select(selectors.selectSellers);
  public currentFakture$ = this.store.select(selectors.selectCurrentFaktura);
  public filteredFakture$ = this.store.select(selectors.selectFilteredFaktura);

  constructor(private store: Store<FakturasState>) {}

  public getFakturas(fakturas: FakturasModel []): void {
    this.store.dispatch(actions.getFakturas({fakturas}));
  }

  public getSeller(sellers: Seller[]): void {
    this.store.dispatch(actions.getSellers({sellers}));
  }

  public getFakturasBySeller(seller: Seller ): void {
    this.store.dispatch(actions.getFakturasBySeller({seller}));
  }

  public resetCurrentFacture(): void {
    this.store.dispatch(actions.resetCurrentFaktura());
  }
  public resetFilteredFacture(): void {
    this.store.dispatch(actions.resetFilteredFaktura());
  }

  public setCurrentFacture(id): void {
    this.store.dispatch(actions.getCurrentFaktura({id}));
  }

  public addFacture(faktura: FakturasModel): void {
    this.store.dispatch(actions.addFaktura({faktura}));
  }

  public editSeller(seller: Seller): void {
    this.store.dispatch(actions.editSeller({seller}));
  }
}
