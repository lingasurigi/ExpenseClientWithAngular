import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { AdduserComponent } from '../components/adduser/adduser.component';
import { EdituserComponent } from '../components/edituser/edituser.component';
import { ListuserComponent } from '../components/listuser/listuser.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([ListuserComponent])
  ],
  declarations: [
    AdduserComponent,
    EdituserComponent,
    ListuserComponent,
  ]
})
export class UserModule { }
