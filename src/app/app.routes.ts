import { Routes } from '@angular/router';
import {SlConfig} from './views/sl-config/sl-config.js';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: SlConfig },
    

];
