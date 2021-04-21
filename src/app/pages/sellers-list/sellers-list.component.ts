import { Component, OnInit } from '@angular/core';
import {FakturasFacade} from '../../store/faktura';

@Component({
  selector: 'app-sellers-list',
  templateUrl: './sellers-list.component.html',
  styleUrls: ['./sellers-list.component.scss']
})
export class SellersListComponent implements OnInit {
  public sellers$ = this.fakturasFacade.sellers$;
  public currentEdit = -1;

  constructor(private fakturasFacade: FakturasFacade) { }

  ngOnInit() {
  }

}
