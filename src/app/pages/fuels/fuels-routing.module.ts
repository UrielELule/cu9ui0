import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuelsPage } from './fuels.page';

const routes: Routes = [
  {
    path: '',
    component: FuelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuelsPageRoutingModule {}
