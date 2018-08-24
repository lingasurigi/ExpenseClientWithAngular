import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { TokenInterceptor } from './common/tokeninterceptor';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular/main';
import { GenderCellRenderer } from './common/renderer.component';
import { AddchitdetailsComponent } from './chit/components/addchitdetails/addchitdetails.component';
import { AdduserComponent } from './user/components/adduser/adduser.component';
import { EdituserComponent } from './user/components/edituser/edituser.component';
import { ListuserComponent } from './user/components/listuser/listuser.component';
import { ListChitDetailsComponent } from './chit/components/listchitdetails/listchitdetails.component';
import { DropDownComponent } from './common/controls/customdropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    EdituserComponent,
    ListuserComponent,
    NavbarComponent,
    GenderCellRenderer,
    AddchitdetailsComponent,
    ListChitDetailsComponent,
    DropDownComponent
    
    
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule,
    AgGridModule.withComponents([ListuserComponent,GenderCellRenderer])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
