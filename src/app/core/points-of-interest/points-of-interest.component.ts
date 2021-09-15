import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PointsOfInterestService } from './points-of-interest.service';
import { POI } from '@models/poi.model';

@Component({
  selector: 'm7-points-of-interest',
  templateUrl: './points-of-interest.component.html',
  styleUrls: ['./points-of-interest.component.scss'],
})
export class PointsOfInterestComponent implements OnInit {
  public poiList: Observable<POI[]> | null = null

  constructor(private _poiService: PointsOfInterestService) {}

  ngOnInit(): void {
    this.poiList = this._poiService.getAllPOI();
  }
}
