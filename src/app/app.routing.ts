import { RouterModule,Routes } from '@angular/router';
import { ListuserComponent } from './user/components/listuser/listuser.component';
import { AdduserComponent } from './user/components/adduser/adduser.component';
import { ListChitDetailsComponent } from './chit/components/listchitdetails/listchitdetails.component';

const appRoutes: Routes = [
  { path: 'listusers', component: ListuserComponent },
  { path: 'adduser', component: AdduserComponent },
  { path: 'users/edit/:userId', component: AdduserComponent },
  { path: 'chitdetails', component: ListChitDetailsComponent },
  { path: '', redirectTo: '/listusers', pathMatch: 'full' }
  ];

export const routing = RouterModule.forRoot(appRoutes)