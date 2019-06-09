import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  const;
  products = [
    {
      id: 0,
      title: 'First Product',
      price: 24.99,
      rating: 4,
      description: 'This is first product description.',
      categories: ['electronics', 'hardware']
    },
    {
      id: 1,
      title: 'Second Product',
      price: 45.99,
      rating: 3,
      description: 'This is second product description.',
      categories: ['books']
    },
    {
      id: 3,
      title: 'Third Product',
      price: 55.99,
      rating: 3.5,
      description: 'This is third product description.',
      categories: ['books']
    },
    {
      id: 4,
      title: 'Fourth Product',
      price: 65.99,
      rating: 3.5,
      description: 'This is fourth product description.',
      categories: ['books']
    },
    {
      id: 5,
      title: 'Fifth Product',
      price: 75.99,
      rating: 3.5,
      description: 'This is fifth product description.',
      categories: ['books']
    },
    {
      id: 6,
      title: 'Six Product',
      price: 85.99,
      rating: 3.5,
      description: 'This is six product description.',
      categories: ['books']
    }
  ];

  getProduct(): Product[] {
    return this.products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories));
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public description: string,
    public categories: string[]) {
  }
}
