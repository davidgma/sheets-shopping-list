import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlNav } from './nav/sl-nav/sl-nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SlNav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sheets-shopping-list');
}
