import { Routes } from '@angular/router';
import { Presentacion }  from './components/presentacion/presentacion';
import { Calculadora } from './components/calculadora/calculadora';

export const routes: Routes = [
    {
        path: '',component: Presentacion,
    },
    {
        path: 'calculadora', component: Calculadora,
    }
];
