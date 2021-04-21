import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import {FakturasFacade, fakturasReducer} from './store/faktura';
import {SharedModule} from './shared/shared.module';
import {StoreDevtools, StoreDevtoolsModule} from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AddComponent } from './pages/add/add.component';
import { ListComponent } from './pages/list/list.component';
import { SingleItemComponent } from './pages/single-item/single-item.component';
import { SellersListComponent } from './pages/sellers-list/sellers-list.component';
import {CoreModule} from './core/core.module';
import {TileComponent} from './pages/list/components/tile/tile.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SellerTileComponent } from './pages/sellers-list/components/seller-tile/seller-tile.component';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    SingleItemComponent,
    SellersListComponent,
    TileComponent,
    SellerTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
    NgSelectModule,
    StoreModule.forRoot({fakturas: fakturasReducer}, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [FakturasFacade],
  bootstrap: [AppComponent]
})
export class AppModule { }
