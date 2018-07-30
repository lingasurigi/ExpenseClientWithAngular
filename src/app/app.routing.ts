import { RouterModule,Routes } from '@angular/router';
import { AdduserComponent } from './components/user/adduser/adduser.component';
import { ListuserComponent } from './components/user/listuser/listuser.component';

const appRoutes: Routes = [
  { path: 'list', component: ListuserComponent },
  { path: 'adduser', component: AdduserComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
  ];

export const routing = RouterModule.forRoot(appRoutes)