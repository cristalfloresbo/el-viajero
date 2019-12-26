import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreguntaAComponent } from './pregunta-a/pregunta-a.component';
import { PreguntaBComponent } from './pregunta-b/pregunta-b.component';
import { PreguntaCComponent } from './pregunta-c/pregunta-c.component';


const routes: Routes = [
  {path: '', redirectTo: '/pregunta-a', pathMatch: 'full'},
  {path: 'pregunta-a', component: PreguntaAComponent},
  {path: 'pregunta-b', component: PreguntaBComponent},
  {path: 'pregunta-c', component: PreguntaCComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
