import { RouterModule, Routes } from '@angular/router';
import { ListuserComponent } from './user/components/listuser/listuser.component';
import { AdduserComponent } from './user/components/adduser/adduser.component';
import { AddChitDetailsComponent } from './chitdetails/components/addchitdetails/addchitdetails.component';
import { ListChitDetailsComponent } from './chitdetails/components/listchitdetails/listchitdetails.component';

const appRoutes: Routes = [
  { path: 'adduser', component: AdduserComponent },
  { path: 'listusers', component: ListuserComponent },
  { path: 'users/edit/:userId', component: AdduserComponent },
  { path: 'addchitdetails', component: AddChitDetailsComponent },
  { path: 'listchitdetails', component: ListChitDetailsComponent },
  { path: '', redirectTo: '/listusers', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes)