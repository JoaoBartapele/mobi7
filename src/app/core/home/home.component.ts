import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'm7-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _homeService: HomeService) {}

  ngOnInit(): void {
    this._homeService.getAllBoards().subscribe((_) => console.log(_));
  }
}
