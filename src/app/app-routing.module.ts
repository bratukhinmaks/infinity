import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './shared/layout/layout.component';
import {ListComponent} from './pages/list/list.component';
import {AddComponent} from './pages/add/add.component';
import {SingleItemComponent} from './pages/single-item/single-item.component';
import {CurrentFakturaGuard} from './core/guards/curretFaktura.guard';
import {SellersListComponent} from './pages/sellers-list/sellers-list.component';


const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'list', component: ListComponent},
      {path: 'add', component: AddComponent},
      {path: 'sellers', component: SellersListComponent},
      {path: ':id', component: SingleItemComponent, canActivate: [CurrentFakturaGuard]},
      //przyklad urzycia roli
      //{path: 'spesialPath', component: Spesial,  canLoad: [AuthGuard, RoleGuard], data: { roles: [Roles.Recruiter] }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
