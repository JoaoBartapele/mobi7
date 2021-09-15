import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private _api_url = environment.api_url;

  constructor(private _http: HttpClient) {}

  public getAllBoards(): Observable<any[]> {
    const url = this._api_url + '/posicao/placas';
    return this._http.get<any[]>(url);
  }
}
