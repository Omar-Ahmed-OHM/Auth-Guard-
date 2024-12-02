import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './service/auth.guard';

export const routes: Routes = [
  {
    path:'', redirectTo:'login',pathMatch:'full'
  },
{
  path:'login',
  component:FirstComponent
}
,
{
  path:'dashpoard',
  component:DashboardComponent,
  canActivate:[authGuard]
}
];
