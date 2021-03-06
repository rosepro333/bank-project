import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HistoryComponent } from './history/history.component';
import { ProfileComponent} from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { UsereditComponent } from './useredit/useredit.component';
import {AnimationsComponent } from './animations/animations.component';
import{AuthGuard} from './guards/auth.guard';
import {TableComponent } from './table/table.component';


//ProfileComponent
const routes: Routes = [
  {path:'',component:LoginComponent},
  //{path:'login',component:LoginComponent},
  
 
  {path:'home', component:HomeComponent,canActivate:[AuthGuard] },
  {path:'history', component:HistoryComponent,canActivate:[AuthGuard] },
  {path:'profile', component:ProfileComponent,canActivate:[AuthGuard] },
  {path:'users', component:UsersComponent,canActivate:[AuthGuard] },
  {path:'users/:id', component:UsereditComponent,canActivate:[AuthGuard]},
  {path:'animations', component:AnimationsComponent},
  {path:'table', component:TableComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
