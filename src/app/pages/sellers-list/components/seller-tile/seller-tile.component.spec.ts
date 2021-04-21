import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerTileComponent } from './seller-tile.component';

describe('SellerTileComponent', () => {
  let component: SellerTileComponent;
  let fixture: ComponentFixture<SellerTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
