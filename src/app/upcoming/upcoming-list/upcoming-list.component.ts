import { Component, OnInit, Input } from '@angular/core';

import {ApiService} from '../../service/api.service';
import {RootObject, Result} from '../interface/upcoming.model';

@Component({
  selector: 'app-upcoming-list',
  templateUrl: './upcoming-list.component.html',
  styleUrls: ['./upcoming-list.component.sass']
})
export class UpcomingListComponent implements OnInit {

  public upcomingData: any;
  public upcomingDataList: Result[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    //  return;
    this.apiService.getUpcomingFlights().subscribe(resData => {
      this.upcomingData = resData;
      this.upcomingDataList = this.upcomingData.results;
      console.log(this.upcomingData);
    });
  }

}
