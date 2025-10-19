import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlHome } from '../../icons/sl-home/sl-home';
import { SlSettings } from '../../icons/sl-settings/sl-settings';
import { SlSheet } from '../../icons/sl-sheet/sl-sheet';

@Component({
  selector: 'sl-nav',
  imports: [SlHome, SlSettings, SlSheet,
    RouterLink],
  templateUrl: './sl-nav.html',
  styleUrl: './sl-nav.css'
})
export class SlNav {
  defaultColour = "black";
  selectedColour = "red";
}
