import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UpcomingListComponent } from './upcoming-list/upcoming-list.component';

const routes: Routes = [
  {path: '', component: UpcomingListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpcomingRoutingModule { }
