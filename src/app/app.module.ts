import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AdduserComponent } from './components/user/adduser/adduser.component';
import { routing } from './app.routing';
import { EdituserComponent } from './components/user/edituser/edituser.component';
import { ListuserComponent } from './components/user/listuser/listuser.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TokenInterceptor } from './common/tokeninterceptor';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular/main';
import { ChitComponent } from './components/chit/chit.component';


@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    EdituserComponent,
    ListuserComponent,
    NavbarComponent,
    ChitComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule,
    AgGridModule.withComponents(ListuserComponent)
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
