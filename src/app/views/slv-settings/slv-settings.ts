import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data-service.js';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'slv-settings',
  imports: [FormsModule],
  templateUrl: './slv-settings.html',
  styleUrl: './slv-settings.css'
})
export class SlvSettings {
 public dataService = inject(DataService);
 temp = "hello";
  
}
