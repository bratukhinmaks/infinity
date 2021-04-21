import {Component, OnInit} from '@angular/core';
import {FakturasFacade} from './store/faktura';
import {fakturas, sellers} from './core/config/fakturas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'test-app';
  constructor(private factureFacade: FakturasFacade) {
  }

  public ngOnInit(): void {
    this.factureFacade.getFakturas(fakturas);
    this.factureFacade.getSeller(Object.values(sellers));
  }
}
