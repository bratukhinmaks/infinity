import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FakturasFacade, Seller} from '../../../../store/faktura';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-seller-tile',
  templateUrl: './seller-tile.component.html',
  styleUrls: ['./seller-tile.component.scss']
})
export class SellerTileComponent implements OnInit {
  @Input() isEditable: boolean;
  @Input() seller: Seller;
  @Output() closeEdit = new EventEmitter();
  form: FormGroup;

  constructor(private fb: FormBuilder, private fakturasFacade: FakturasFacade) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    } else {
      const seller = {
        id: this.seller.id,
        name: this.form.value.name,
        address: this.form.value.address,
      };
      this.fakturasFacade.editSeller(seller);
      this.isEditable = false;
      this.closeEdit.emit();
    }
  }

}
