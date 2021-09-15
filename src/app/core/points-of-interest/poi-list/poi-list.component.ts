import { Component, Input, OnInit } from '@angular/core';
import { POI } from '@models/poi.model';

@Component({
  selector: 'm7-poi-list',
  templateUrl: './poi-list.component.html',
  styleUrls: ['./poi-list.component.scss'],
})
export class PoiListComponent implements OnInit {
  @Input() list: POI[] | null = [];

  constructor() {}

  ngOnInit(): void {}

  public getData(point: POI) {
    console.log(point);
  };
}
