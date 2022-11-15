import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularJsComponent } from './angular-js/angular-js.component';
import { HomeComponent } from './home/home.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { NodeJsComponent } from './node-js/node-js.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'angularJs', component: AngularJsComponent},
  {path:'javascript', component: JavascriptComponent},
  {path:'nodeJs', component: NodeJsComponent},
  {path:'result', component: ResultsComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
