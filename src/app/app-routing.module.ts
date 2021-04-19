import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerardoComponent } from './gerardo/gerardo.component';
import { HomeComponent } from './home/home.component';
import { RobertoPageComponent } from './roberto-page/roberto-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, 
  { path: 'home', component: HomeComponent },
  { path: 'roberto', component: RobertoPageComponent },
  { path: 'Gerardo', component: GerardoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
