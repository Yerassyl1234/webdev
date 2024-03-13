import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = products;
  searchInput: string = '';

  constructor(
    private route: ActivatedRoute,
  ) {}
  ngOnInit() {


    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get('categoryId'));

    this.products = products.filter(products => products.categoryId === categoryIdFromRoute);
  }

  get filteredProducts(): Product[] {
    const searchTerm = this.searchInput.toLowerCase();
    return this.products.filter(product => product.name.toLowerCase().includes(searchTerm));
  }



  sharetg(productName: string, productLink: string) {
    const shareMessage = `Check out this product: ${productName} - ${productLink}`;
    const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(shareMessage)}`;
    window.location.href = telegramLink;
  }

  like(product: Product) {
    product.likes++;
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  delete(product: Product) {
    const index = this.products.indexOf(product);

    if (index !== -1) {
      this.products.splice(index, 1);
      window.alert('Product has been deleted');
    } else {
      window.alert('Product not found');
    }
  }
}
