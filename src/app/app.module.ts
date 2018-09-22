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
import { UserModule } from './user/module/user.module.module';
import { ChitdetailsModule } from './chit/module/chitdetails.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GenderCellRenderer
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule,
    UserModule,
    ChitdetailsModule,
    AgGridModule.withComponents([GenderCellRenderer])
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
