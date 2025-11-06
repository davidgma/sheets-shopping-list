import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public debug: string;
  public defaults: Defaults;

  constructor() {

    // this.spreadsheetId = "test";
    this.defaults = new Defaults();
    this.defaults.data.set("spreadsheetId", "1YZWmLktxzprYWLZDHopC0vsz_Z44eavyHyo0lgWsSj4")
    this.defaults.data.set("cliendId", "285838277656-epg5b87qpis468k0r6crifeiq8m68djf.apps.googleusercontent.com");
    this.defaults.data.set("APIkey", "AIzaSyBYAKEDgQCyvtwbUk0Gws7obBycBCva99E");
    this.defaults.data.set("listRange", "list");
    this.defaults.data.set("cookiesRange", "cookies");
    this.defaults.data.set("authenticationToken", "");
    this.defaults.data.set("accessTokenExpiry", "null");
    this.defaults.data.set("version", "1");
    this.defaults.data.set("listData", "");
    this.defaults.data.set("cookiesData", "");

    // Use locally stored values where possible
    this.defaults.overrideWithLocal();

    this.debug = this.defaults.toString();
  }

  public get spreadsheetId(): string {
    return this.defaults.getByName("spreadsheetId");
  }
  public set spreadsheetId(value: string) {
    this.defaults.data.set("spreadsheetId", value);
    localStorage.setItem("spreadsheetId", value);
  }


}

class Defaults {
  public data = new Map<string, string>();

  overrideWithLocal() {
    for (let item of this.data.entries()) {
      const local = localStorage.getItem(item[0]);
      if (local !== null) {
        this.data.set(item[0], local);
      }
    }
  }

  toString() {
    let result = "";
    for (let item of this.data.entries()) {
      result += item[0] + " = " + item[1] + ". ";
    }
    return result;
  }

  getByName(name: string) {
    const result = this.data.get(name);
    if (result !== undefined) {
      return result;
    }
    else return "undefined";
  }

  setByName(name: string, value: string) {
    this.data.set(name, value);
  }


}
