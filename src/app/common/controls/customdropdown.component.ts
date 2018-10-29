import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'custom-dropdown',
    template: ` 
    <div [formGroup]="chitDetailsForm">
          <select (change)="onSelect($event.target.value)" class="form-control" formControlName="{{controolID}}">
            <option *ngFor="let item of inputData" [value]="item.value">{{item.text}}</option>
          </select>
    </div>
    `,
    styleUrls :['./customdropdown.component.css']
    //directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class DropDownComponent { 
    @Input() inputData:any;
    @Input() controlId:any;
    @Input() group: FormGroup;
    control: FormControl;
    public selectedItem:any;
    public products: any;
    public controolID: any;
    constructor(private _fb: FormBuilder){
      this.group = this._fb.group({
        //chitName: [''],
        userId : new FormControl(),
        chitId : new FormControl(),
        agentId : new FormControl()
      })
    }
    ngOnInit(){
           this.controolID = this.controlId;
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


