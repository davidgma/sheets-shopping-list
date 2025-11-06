import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public spreadsheetId = "initial2";
  public debug: string;
  private defaults: Defaults;

  constructor() {

    this.defaults = new Defaults(
      "1YZWmLktxzprYWLZDHopC0vsz_Z44eavyHyo0lgWsSj4", //spreadsheetId
      "285838277656-epg5b87qpis468k0r6crifeiq8m68djf.apps.googleusercontent.com", //cliendId
      "AIzaSyBYAKEDgQCyvtwbUk0Gws7obBycBCva99E", //APIkey
      "list", //listRange
      "cookies", //cookiesRange
      "", //authenticationToken
      null, // accessTokenExpiry number of seconds since 1970, when token expires
      1, //version
      "", //listData
      ""); //cookiesData
  
   this.debug = this.defaults.toString();

    const spreadsheetIdStored = localStorage.getItem("spreadsheetId");
    if (spreadsheetIdStored === null) {
      // this.debug = "spreadsheetId is null ";
      localStorage.setItem("spreadsheetId", this.spreadsheetId);
    }
    else {
      // this.debug = "spreadsheetId: " + spreadsheetIdStored;
      this.spreadsheetId = spreadsheetIdStored;
    }


  }

  
}

class Defaults {
  constructor(
    private _spreadsheetId: string,
    private _cliendId: string,
    private _APIkey: string,
    private _listRange: string,
    private _cookiesRange: string,
    private _authenticationToken: string,
    private _accessTokenExpiry: number | null,
    private _version: number,
    private _listData: string,
    private _cookiesData: string
  ) { }

  toString(): string {
    return "\n" + "spreadsheetId: " + this._spreadsheetId + "\n"
    + "cliendId: " + this._cliendId + "\n"
    + "APIkey: " + this._APIkey + "\n"
    + "listRange: " + this._listRange + "\n"
    + "cookiesRange: " + this._cookiesRange + "\n"
    + "authenticationToken: " + this._authenticationToken + "\n"
    + "accessTokenExpiry: " + this._accessTokenExpiry + "\n"
    + "version: " + this._version + "\n"
    + "listData: " + this._listData + "\n"
    + "cookiesData: " + this._cookiesData + "\n"
    ;
  }
}
