import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardsComponent } from './boards/boards.component';
import { HomeComponent } from './home/home.component';
import { PointsOfInterestComponent } from './points-of-interest/points-of-interest.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'boards', component: BoardsComponent },
  { path: 'pois', component: PointsOfInterestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
