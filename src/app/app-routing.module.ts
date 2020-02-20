import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddComponent } from './components/add/add.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EditComponent } from './components/edit/edit.component';
import { DetailComputerComponent } from './components/detail-computer/detail-computer.component';


const routes: Routes = [
  {path : "", redirectTo : "dashboard", pathMatch : "full"},
  {path : "dashboard", component : DashboardComponent},
  {path : "add", component : AddComponent},
  {path : "edit/:id", component : EditComponent},
  {path : "ordinateur/:id", component : DetailComputerComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
