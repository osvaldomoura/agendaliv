import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './views/home/home.component';

//criando roteamento para home principal
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
