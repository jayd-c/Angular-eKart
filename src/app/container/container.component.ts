import { Component,Input } from '@angular/core';
import { SearchComponent } from "./search/search/search.component";
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Component({
    selector: 'container',
    standalone: true,
    templateUrl: './container.component.html',
    styleUrl: './container.component.css',
    imports: [SearchComponent, CommonModule,ProductListComponent,ProductDetailComponent]
})
export class ContainerComponent {
 
  // listOfStrings: string[] = ["Mark","Steve","Merry","John","Sarah"]

  @Input()
  searchText:string = '';

  setSearchText(value:string) {
    this.searchText = value;
  }


  
}
