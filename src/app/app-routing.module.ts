import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { EzequielComponent } from './ezequiel/ezequiel.component';
=======
import { GerardoComponent } from './gerardo/gerardo.component';
import { DanielComponent } from './daniel/daniel.component';
>>>>>>> 15478e79b10fdcca14ac54d9803b57a681571f1b
import { HomeComponent } from './home/home.component';
import { RobertoPageComponent } from './roberto-page/roberto-page.component';
import { ZaratebisComponent } from './zaratebis/zaratebis.component';

const routes: Routes = [
<<<<<<< HEAD
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'roberto', component: RobertoPageComponent },
  { path: 'ezequiel', component: EzequielComponent },
=======
  {path: '', component: HomeComponent}, 
  { path: 'home', component: HomeComponent },
  { path: 'roberto', component: RobertoPageComponent },
  { path: 'Gerardo', component: GerardoComponent },
  { path: 'daniel', component: DanielComponent },
  { path: 'zaratebis', component: ZaratebisComponent },
>>>>>>> 15478e79b10fdcca14ac54d9803b57a681571f1b
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
