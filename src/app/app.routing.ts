import { RouterModule,Routes } from '@angular/router';
import { AdduserComponent } from './components/user/adduser/adduser.component';
import { ListuserComponent } from './components/user/listuser/listuser.component';
import { EdituserComponent } from './components/user/edituser/edituser.component';

const appRoutes: Routes = [
  { path: 'listusers', component: ListuserComponent },
  { path: 'adduser', component: AdduserComponent },
  { path: 'users/edit/:userId', component: AdduserComponent },
  { path: '', redirectTo: '/listusers', pathMatch: 'full' }
  ];

export const routing = RouterModule.forRoot(appRoutes)