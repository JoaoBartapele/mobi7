import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { POI } from '@models/poi.model';

@Injectable({
  providedIn: 'root',
})
export class PointsOfInterestService {
  private _url_api = environment.api_url;

  constructor(private _http: HttpClient) {}

  public getAllPOI(): Observable<POI[]> {
    const url = this._url_api + '/pois';
    return this._http.get<POI[]>(url);
  }

  public getAllVehicles(): Observable<string[]> {
    const url = this._url_api + '/posicao/placas';
    return this._http.get<string[]>(url);
  }
}
