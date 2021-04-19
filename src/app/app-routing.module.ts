import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EzequielComponent } from './ezequiel/ezequiel.component';
import { HomeComponent } from './home/home.component';
import { RobertoPageComponent } from './roberto-page/roberto-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'roberto', component: RobertoPageComponent },
  { path: 'ezequiel', component: EzequielComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
