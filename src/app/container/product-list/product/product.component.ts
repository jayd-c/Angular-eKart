import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  index:number;
  @Input()
  product:{
      id?: number,
      name: string,
      description: string,
      brand: string,
      gender: string,
      category: string,
      size: string[],
      color: string[],
      price: number,
      discountPrice:number,
      is_in_inventory: boolean,
      items_left: number,
      imageURL: string,
      slug: string
  };
}
