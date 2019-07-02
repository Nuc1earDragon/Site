import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TanksComponent } from './tanks/tanks.component';


const routes: Routes = [
  { path: 'tanks', component: TanksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
