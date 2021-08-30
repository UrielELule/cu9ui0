import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnidadPageRoutingModule } from './unidad-routing.module';

import { UnidadPage } from './unidad.page';
import { ShareModule } from '../../components/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnidadPageRoutingModule,
    ShareModule
  ],
  declarations: [UnidadPage]
})
export class UnidadPageModule {}
