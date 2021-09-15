import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PointsOfInterestComponent } from './points-of-interest/points-of-interest.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'pois', component: PointsOfInterestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
