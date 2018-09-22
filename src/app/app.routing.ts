import { RouterModule,Routes } from '@angular/router';
import { ListuserComponent } from './user/components/listuser/listuser.component';
import { AdduserComponent } from './user/components/adduser/adduser.component';
import { ListChitDetailsComponent } from './chit/components/listchitdetails/listchitdetails.component';
import { AddChitDetailsComponent } from './chit/components/addchitdetails/addchitdetails.component';

const appRoutes: Routes = [
  { path: 'adduser', component: AdduserComponent },
  { path: 'listusers', component: ListuserComponent },
  { path: 'users/edit/:userId', component: AdduserComponent },
  { path: 'addchitdetails', component: AddChitDetailsComponent },
  { path: 'listchitdetails', component: ListChitDetailsComponent },
  { path: '', redirectTo: '/listusers', pathMatch: 'full' }
  ];

export const routing = RouterModule.forRoot(appRoutes)