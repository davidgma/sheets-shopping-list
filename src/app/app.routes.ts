import { Routes } from '@angular/router';
import { SlvSettings } from './views/slv-settings/slv-settings.js';
import { SlItems } from './views/sl-items/sl-items.js';
import { SlvSheet } from './views/slv-sheet/slv-sheet.js';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: SlItems },
    { path: 'settings', component: SlvSettings },
    { path: 'sheet', component: SlvSheet },

];
