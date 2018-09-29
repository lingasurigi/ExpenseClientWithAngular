import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    selector: 'custom-dropdown',
    template: ` 
    <select (change)="onSelect($event.target.value)" class="form-control">
      <option *ngFor="let item of inputData" [value]="item.value">{{item.text}}</option>
    </select>
    
    `,
    styleUrls :['./customdropdown.component.css']
    //directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class DropDownComponent { 
    @Input() inputData:any;
    public selectedItem:any;
    public products: any;
    constructor(){
         
    }
    ngOnInit(){
        // this.products = inputData
      debugger;
           this.selectedItem = this.inputData[0];
    }
    onSelect(itemId) { 
        this.selectedItem = null;
        for (var i = 0; i < this.inputData.length; i++)
        {
          if (this.inputData[i].value == itemId) {
            this.selectedItem = this.inputData[i];
          }
        }
    }
}


