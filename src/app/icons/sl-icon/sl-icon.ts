import { Component, input, OnInit, inject } from '@angular/core';
import { Router, EventType } from '@angular/router';

@Component({
  selector: 'sli-icon',
  imports: [],
  templateUrl: './sl-icon.html',
  styleUrl: './sl-icon.css'
})
export class SlIcon implements OnInit  {
  private router = inject(Router);
  routeName = input("");
  defaultColour = input("green");
  selectedColour = input("red");
  iconSize = input(10);
  text = input<string | null>("SetMe");

  fillColour = "black";
  strokeColour = "darkslategray";

  ngOnInit(): void {

    // Set initial fill colour
    this.fillColour = this.defaultColour();

    // Listen for routing changes
    this.router.events.subscribe((event) => {
      if (event.type === EventType.NavigationStart) {
        if (this.router.url === this.routeName()) {
          this.fillColour = this.defaultColour();
        }
      }

      if (event.type === EventType.NavigationEnd) {
        if (event.urlAfterRedirects === this.routeName()) {
          this.fillColour = this.selectedColour();
        }
      }
    });

  }
}
