import { Component } from '@angular/core';

@Component({
    selector: 'my-dropdown',
    template: `
    <select (change)="onSelect($event.target.value)">
      <option *ngFor="let product of products" [value]="product.id">{{product.name}}</option>
    </select>
    <div>selection={{selectedProduct.name}}</div>
    `
    //directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class DropDownComponent { 
    
    public selectedProduct:any;
    public products: any;
    constructor(){
         
    }
    onInit(){
        this.products = [
            { "id": 1, "name": "Table" },
            { "id": 2, "name": "Chair" },
            { "id": 3, "name": "Light" }
          ];
      
          this.selectedProduct = this.products[0];
    }
    onSelect(productId) { 
        this.selectedProduct = null;
        for (var i = 0; i < this.products.length; i++)
        {
          if (this.products[i].id == productId) {
            this.selectedProduct = this.products[i];
          }
        }
    }
}


