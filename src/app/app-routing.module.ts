import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiegoComponent } from './diego/diego.component';
import { GerardoComponent } from './gerardo/gerardo.component';
import { DanielComponent } from './daniel/daniel.component';
import { HomeComponent } from './home/home.component';
import { RobertoPageComponent } from './roberto-page/roberto-page.component';
import { ZaratebisComponent } from './zaratebis/zaratebis.component';
import { RenatoComponent } from './renato/renato.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'roberto', component: RobertoPageComponent },
  { path: 'diego', component: DiegoComponent},
  { path: 'Gerardo', component: GerardoComponent },
  { path: 'daniel', component: DanielComponent },
  { path: 'zaratebis', component: ZaratebisComponent },
  { path: 'renato', component: RenatoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
