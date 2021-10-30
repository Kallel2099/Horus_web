import { LoginComponent } from './login/login.component';
import { LeitorlavComponent } from './leitorlav/leitorlav.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GerenciarComponent } from './gerenciar/gerenciar.component';
import { DistribuirComponent } from './distribuir/distribuir.component';
import { ArmazenarComponent } from './armazenar/armazenar.component';
import { EsterilizarComponent } from './esterilizar/esterilizar.component';
import { PrepararComponent } from './preparar/preparar.component';
import { LavarComponent } from './lavar/lavar.component';
import { TextilComponent } from './textil/textil.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'textil', component:TextilComponent},
  {path:'lavar', component:LavarComponent},
  {path:'preparar', component:PrepararComponent},
  {path:'esterilizar', component:EsterilizarComponent},
  {path:'armazenar', component:ArmazenarComponent},
  {path:'distribuir', component:DistribuirComponent},
  {path:'gerenciar', component:GerenciarComponent},
  {path:'leitorlav', component:LeitorlavComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
