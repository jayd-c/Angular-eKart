import { Component } from '@angular/core';
import { SearchComponent } from "./search/search/search.component";

@Component({
    selector: 'product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    imports: [SearchComponent]
})
export class ProductListComponent {

  // name = "John Smith";
  addToCart:number = 0;
  product = {
    name:'iphone X',
    price: 789,
    color:'Black',
    discount:8.5,
    inStock:5,
    pImage:'/assets/images/iphone.jpg'
  }

  getDiscountedPrice () {
   return this.product.price - (this.product.price * (this.product.discount/100))
  }

  onNameChange(event:any){
    // this.name = event.target.value;
    // console.log(event)
  }

  incrementCartValue() {
    if(this.addToCart < this.product.inStock) this.addToCart++;
    }
    decrementCartValue() {
      if(this.addToCart>0) this.addToCart--;
    }
}
