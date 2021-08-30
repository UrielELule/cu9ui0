import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnidadPage } from './unidad.page';

const routes: Routes = [
  {
    path: '',
    component: UnidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnidadPageRoutingModule {}
