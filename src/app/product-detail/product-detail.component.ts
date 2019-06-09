import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'nga-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: string;
  sellerId: 5678;

  constructor(route: ActivatedRoute) { this.productId = route.snapshot.paramMap.get('id'); }

  ngOnInit() {
  }

}
