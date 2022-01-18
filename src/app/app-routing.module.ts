import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DivisionComponent } from './division/division.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { TambahDataComponent } from './tambah-data/tambah-data.component';
import { DeleteDataComponent } from './delete-data/delete-data.component';

const routes: Routes = [
  {path:"dashboard", component:DashboardComponent},
  {path:"divisi", component:DivisionComponent},
  {path:"edit", component:EditDataComponent},
  {path:"tambah", component:TambahDataComponent},
  {path:"delete", component:DeleteDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
