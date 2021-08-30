import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { SelectComponent } from './select/select.component';
import { ListunitesComponent } from './listunites/listunites.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [InputComponent, ButtonComponent, SelectComponent, ListunitesComponent, HeaderComponent],
    imports: [ CommonModule, IonicModule ],
    exports: [InputComponent, ButtonComponent, SelectComponent, ListunitesComponent, HeaderComponent],
    providers: [],
})
export class ShareModule {}