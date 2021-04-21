import { Component, OnInit, Input } from '@angular/core';

import { Definition } from '@app/state/audiences';

@Component({
  selector: 'app-data-sources-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {
  @Input() public definition: Definition;
  @Input() public isSegmented = false;
  public isDefined: boolean;

  public ngOnInit(): void {
    this.isDefined = this.isSegmented
      ? this.definition && !!this.definition.segmentSize
      : this.definition && !!this.definition.sampleSize;
  }
}
