import { Component } from '@angular/core';
import { SlHome } from '../../icons/sl-home/sl-home';

@Component({
  selector: 'sl-nav',
  imports: [SlHome],
  templateUrl: './sl-nav.html',
  styleUrl: './sl-nav.css'
})
export class SlNav {
  defaultColour = "black";
  selectedColour = "red";
}
