import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { POI } from '@models/poi.model';

import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from '@env/environment';

@Component({
  selector: 'm7-poi-list',
  templateUrl: './poi-list.component.html',
  styleUrls: ['./poi-list.component.scss'],
})
export class PoiListComponent implements OnInit {
  @Input() list: POI[] | null = [];
  @Input() vehicleList: string[] | null = [];

  public apiLoaded: any;
  public mapOptions: google.maps.MapOptions = {};
  public circleCenter: google.maps.LatLngLiteral = { lat: 10, lng: 15 };
  public radius = 0;
  public vehicleInPosition: any;

  constructor(private httpClient: HttpClient) {}

  async ngOnInit() {
    this.apiLoaded = await this.httpClient
      .jsonp(
        'https://maps.googleapis.com/maps/api/js?key=' + environment.maps_key,
        'callback'
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      )
      .toPromise();
  }

  private _setMapConfigs(point: POI): void {
    this.mapOptions = {
      center: {
        lat: point.latitude,
        lng: point.longitude,
      },
    };
    this.circleCenter = {
      lat: point.latitude,
      lng: point.longitude,
    };
    this.radius = point.raio;
  }

  public loadData(point: POI) {
    this._setMapConfigs(point);
  }

}
