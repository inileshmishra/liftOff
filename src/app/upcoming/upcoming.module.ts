import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpcomingRoutingModule } from './upcoming-routing.module';
import { UpcomingListComponent } from './upcoming-list/upcoming-list.component';
import { UpcomingCardComponent } from './upcoming-card/upcoming-card.component';


@NgModule({
  declarations: [
    UpcomingListComponent,
    UpcomingCardComponent
  ],
  imports: [
    CommonModule,
    UpcomingRoutingModule
  ]
})
export class UpcomingModule { }
