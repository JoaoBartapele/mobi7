import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PointsOfInterestService } from './points-of-interest.service';
import { POI } from '@models/poi.model';

@Component({
  selector: 'm7-points-of-interest',
  templateUrl: './points-of-interest.component.html',
  styleUrls: ['./points-of-interest.component.scss'],
})
export class PointsOfInterestComponent implements OnInit {
  public poiList: Observable<POI[]> = of([]);
  public vehicleList: Observable<string[]> = of();

  constructor(private _poiService: PointsOfInterestService) {}

  ngOnInit(): void {
    this.poiList = this._poiService.getAllPOI();
    this.vehicleList = this._poiService.getAllVehicles();
  }
}
