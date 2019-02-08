import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { KartService } from '../kart-service.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
    
  @Output() productEmitter: EventEmitter<any>= new EventEmitter();
    private items : any[] = [];

  constructor(private kartService: KartService) {
    this.items = this.getItemList();
   }

  ngOnInit() {
  }

  getItemList() {
    return [
      {id:1, name: 'product1', price: '₹ 320', url: './assets/images/capsule1.jpg'},
      {id:2, name: 'product2', price: '₹ 30', url: './assets/images/injection1.jpg'},
      {id:3, name: 'product3', price: '₹ 50', url: './assets/images/tablet2.jpg'},
      {id:4, name: 'product4', price: '₹ 150', url: './assets/images/powder1.jpg'},
      {id:5, name: 'product5', price: '₹ 1000', url: './assets/images/liquid1.jpg'},
      {id:6, name: 'product6', price: '₹ 300', url: './assets/images/drops1.jpg'},
      {id:7, name: 'product7', price: '₹ 550', url: './assets/images/tablet3.jpg'},
      {id:5, name: 'product5', price: '₹ 1000', url: './assets/images/liquid1.jpg'},
      {id:6, name: 'product6', price: '₹ 300', url: './assets/images/drops1.jpg'},
      {id:7, name: 'product7', price: '₹ 550', url: './assets/images/tablet3.jpg'},
    ];
  }

  addToCart(product: any) {
    debugger
    this.kartService.setkartCount(1);
    //this.productEmitter.emit(product);
  }
}

