import { Component, OnInit } from '@angular/core';
import {FakturasFacade, FakturasModel} from '../../store/faktura';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {
  item$: Observable<FakturasModel[]> = this.faktureFacade.currentFakture$;

  constructor(private faktureFacade: FakturasFacade) { }

  ngOnInit() {
  }

}
