import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inicio', icon: 'home' },
    { title: 'Unidades', url: '/folder/Unidades', icon: 'subway' },
    { title: 'Combustibles', url: '/folder/Combustible', icon: 'scale' },
    { title: 'Status Unidad', url: '/folder/Estatus unidad', icon: 'bus' },
    { title: 'Personal', url: '/folder/Personal', icon: 'people' },
    { title: 'Mi historial', url: '/folder/Historial', icon: 'newspaper' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
