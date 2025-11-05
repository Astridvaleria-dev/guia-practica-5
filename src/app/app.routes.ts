import { Routes } from '@angular/router';
import { Tareas } from './tareas/tareas';
import { Acerca } from './acerca/acerca';

export const routes: Routes = [ 
    { path: '', component: Tareas },
    { path: 'acerca', component: Acerca },
];
