import { Component, OnInit } from '@angular/core';
import {FakturasFacade} from '../../store/faktura';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  form: FormGroup;
  sellers$ = this.fakturasFacade.sellers$;

  constructor(private fakturasFacade: FakturasFacade, private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      number: new FormControl(null, Validators.required),
      seller: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    } else {
      const faktura = {
        id: this.form.value.number,
        seller: this.form.value.seller,
        price: this.form.value.price,
        data: new Date().getUTCDate().toString(),
      };
      console.log(faktura);
      this.fakturasFacade.addFacture(faktura);
      this.form.reset();
      this.router.navigate(['/']);
    }
  }
}
