import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/contenedor/inicio/inicio.component';
import { ErrorComponent } from './components/contenedor/error/error.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},

  /* RUTAS OBLIGATORIAS*/
  {path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
