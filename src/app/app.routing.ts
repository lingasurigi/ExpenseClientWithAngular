import { RouterModule,Routes } from '@angular/router';
import { AdduserComponent } from './components/user/adduser/adduser.component';
import { ListuserComponent } from './components/user/listuser/listuser.component';
import { EdituserComponent } from './components/user/edituser/edituser.component';
import { ChitComponent } from './chit/components/chit.component';

const appRoutes: Routes = [
  { path: 'listusers', component: ListuserComponent },
  { path: 'adduser', component: AdduserComponent },
  { path: 'users/edit/:userId', component: AdduserComponent },
  { path: 'chits', component: ChitComponent },
  { path: '', redirectTo: '/listusers', pathMatch: 'full' }
  ];

export const routing = RouterModule.forRoot(appRoutes)