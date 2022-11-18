import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddItemComponent } from "./add-item/add-item.component";


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-item', component: AddItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
