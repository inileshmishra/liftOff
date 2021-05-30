import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUpcomingFlights(){
   return this.http.get('https://ll.thespacedevs.com/2.0.0/launch/upcoming/');
  }
}
