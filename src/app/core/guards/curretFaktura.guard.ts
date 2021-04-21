import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, UrlTree} from '@angular/router';

import { Observable, of } from 'rxjs';
import {switchMap, map, take, first, tap} from 'rxjs/operators';
import { get } from 'lodash';

import { FakturasFacade } from '../../store/faktura';

@Injectable()
export class CurrentFakturaGuard implements CanActivate {
  constructor(
    private router: Router,
    private fakturasFacade: FakturasFacade,
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    const id = get(route.params, 'id');
    console.log(id);
    if (!id) {
      return of(false);
    }
    this.fakturasFacade.resetCurrentFacture();
    this.fakturasFacade.setCurrentFacture(id);
    return this.fakturasFacade.currentFakture$.pipe(
      take(1),
      tap(console.log),
      switchMap(factura => {
        if (factura[0].id == id) {
          return of(true);
        }
        this.router.navigate(['/']);
        return of(false);
      }),
      );
  }
}
