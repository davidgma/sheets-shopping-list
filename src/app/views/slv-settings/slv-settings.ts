import { Component } from '@angular/core';

@Component({
  selector: 'slv-settings',
  imports: [],
  templateUrl: './slv-settings.html',
  styleUrl: './slv-settings.css'
})
export class SlvSettings {

  private theDefault = {
    spreadsheetId: "1YZWmLktxzprYWLZDHopC0vsz_Z44eavyHyo0lgWsSj4",
    clientId: "285838277656-epg5b87qpis468k0r6crifeiq8m68djf.apps.googleusercontent.com",
    APIkey: "AIzaSyBYAKEDgQCyvtwbUk0Gws7obBycBCva99E",
    listRange: "list",
    cookiesRange: "cookies",
    authenticationToken: "",
    accessToken: "",
    accessTokenExpiry: null, // number of seconds since 1970, when token expires
    version: 1,
    listData: "",
    cookiesData: ""
  }
}
