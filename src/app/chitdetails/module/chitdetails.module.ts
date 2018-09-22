import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { ListChitDetailsComponent } from '../components/listchitdetails/listchitdetails.component';
import { AddChitDetailsComponent } from '../components/addchitdetails/addchitdetails.component';
import { DropDownComponent } from '../../common/controls/customdropdown.component';

@NgModule({
  declarations: [
    AddChitDetailsComponent,
    ListChitDetailsComponent,
    DropDownComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([ListChitDetailsComponent])
  ]
})
export class ChitDetailsModule { }
