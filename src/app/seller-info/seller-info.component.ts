import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'nga-seller-info',
  templateUrl: './seller-info.component.html',
  styleUrls: ['./seller-info.component.css']
})
export class SellerInfoComponent implements OnInit {
  sellerID: string;
  constructor(route: ActivatedRoute) { this.sellerID = route.snapshot.paramMap.get('id'); }

  ngOnInit() {
  }

}
