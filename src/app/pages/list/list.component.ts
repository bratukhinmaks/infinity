import {Component, OnDestroy, OnInit} from '@angular/core';
import { FakturasFacade } from '../../store/faktura';
import {fakturas} from '../../core/config/fakturas';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  public facturas$ = this.fakturasFacade.fakturas$;
  public sellers$ = this.fakturasFacade.sellers$;
  public filtered$ = this.fakturasFacade.filteredFakture$;

  constructor(private fakturasFacade: FakturasFacade) { }

  ngOnInit() {
  }

  public changeFilter(event: any): void {
    if (event === undefined) {
      this.fakturasFacade.resetFilteredFacture();
      return;
    }
    this.fakturasFacade.getFakturasBySeller(event);
  }

  public ngOnDestroy(): void {
    this.fakturasFacade.resetFilteredFacture();
  }
}
