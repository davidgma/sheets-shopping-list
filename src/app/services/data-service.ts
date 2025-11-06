import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public debug: string;
  public defaults: Defaults;

  constructor() {

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


    this.debug = this.defaults.toString();


  }


}

class Defaults {
  public data = new Map<string, string>();

  toString() {
    let result = "";
    for (let item of this.data.entries()) {
      result += item[0] + " = ";
    }
    return result;
  }
  // toString(): string {
  //   return "\n" + "spreadsheetId: " + this.spreadsheetId + "\n"
  //   + "cliendId: " + this._cliendId + "\n"
  //   + "APIkey: " + this._APIkey + "\n"
  //   + "listRange: " + this._listRange + "\n"
  //   + "cookiesRange: " + this._cookiesRange + "\n"
  //   + "authenticationToken: " + this._authenticationToken + "\n"
  //   + "accessTokenExpiry: " + this._accessTokenExpiry + "\n"
  //   + "version: " + this._version + "\n"
  //   + "listData: " + this._listData + "\n"
  //   + "cookiesData: " + this._cookiesData + "\n"
  //   ;
  // }

  // get spreadsheetId() {
  //   const name = "spreadsheetId";
  //   const stored = localStorage.getItem(name);
  //   if (stored === null) {
  //     localStorage.setItem(name, this._spreadsheetId);
  //   }
  //   else {
  //     this._spreadsheetId = stored;
  //   }
  //   return this._spreadsheetId;
  // }

  // set spreadsheetId(value: string) {
  //   const name = "spreadsheetId";
  //   localStorage.setItem(name, value);
  //   this._spreadsheetId = value;
  // }


}
