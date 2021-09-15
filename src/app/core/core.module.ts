import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './home/home.component';
import { PoiListComponent } from './points-of-interest/poi-list/poi-list.component';
import { PointsOfInterestComponent } from './points-of-interest/points-of-interest.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

@NgModule({
  declarations: [
    HomeComponent,
    PoiListComponent,
    PointsOfInterestComponent,
    VehiclesComponent,
  ],
  imports: [CoreRoutingModule, SharedModule],
})
export class CoreModule {}
