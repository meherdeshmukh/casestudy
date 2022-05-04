import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allProducts: any[] = [];
  defaultProducts: any[] = [];
  viewtype = 'grid';
  constructor(private productsSvc: ProductsService) {}

  ngOnInit(): void {
    this.allProducts = this.productsSvc.getProducts();
    this.defaultProducts = [...this.allProducts];
  }
  changeView(e: any) {
    this.viewtype = e.target.checked ? 'list' : 'grid';
  }
  sort(order: string) {
    if (order === 'default') {
      this.allProducts = [...this.defaultProducts];
    } else {
      this.allProducts.sort((a: any, b: any) => {
        return order === 'asc'
          ? a['price'] - b['price']
          : b['price'] - a['price'];
      });
    }
  }
}
