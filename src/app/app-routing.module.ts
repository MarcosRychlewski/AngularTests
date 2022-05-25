import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtivoComponent } from './ativo/ativo.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DashComponent } from './dash/dash.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "home", component: HomeComponent,
  },
  {
    path: "cadastro", component: CadastroComponent
  },
  {
    path: "dash", component: DashComponent,
  },
  {
    path: "ativo", component: AtivoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
