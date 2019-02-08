import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

import * as models from '../models';

@Component({
  selector: 'app-add-item-list',
  templateUrl: './add-item-list.component.html',
  styleUrls: ['./add-item-list.component.css']
})
export class AddItemListComponent implements OnInit {

  itemForm: FormGroup;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.addFormControl();
  }

  addFormControl() {
    this.itemForm = new FormGroup({
      productImage: new FormControl('', Validators.required),
      productName: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      expDate: new FormControl('', Validators.required)
    });
  }

  item() {
    debugger
    const data: models.ItemModel = {};
    data.productName = this.itemForm.get('productName').value;
    data.price = this.itemForm.get('price').value;
    data.category = this.itemForm.get('category').value;
    data.description = this.itemForm.get('description').value;
    data.expDate = this.itemForm.get('expDate').value;
  }
}
