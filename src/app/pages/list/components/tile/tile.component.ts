import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FakturasModel} from '../../../../store/faktura';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TileComponent implements OnInit {
  @Input() public facture: FakturasModel ;

  public ngOnInit(): void {
  }
}
