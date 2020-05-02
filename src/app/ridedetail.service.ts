import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRideDetail } from './ridedetail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RidedetailService {

  private _url: string = 'assets/data/ridedetail.json'
  constructor(private http: HttpClient) { }
  // We are fetching data from server
  getRideDetail(): Observable<IRideDetail[]> {
    // return [
    //   {"id": 1, "seatsLeft": 4, "pickup": "Jabalpur", "destination": "Jaipur"},
    //   {"id": 2, "seatsLeft": 14, "pickup": "Bombay", "destination": "Bhopal"},
    //   {"id": 3, "seatsLeft": 24, "pickup": "Bhopal", "destination": "Bombay"},
    //   {"id": 4, "seatsLeft": 34, "pickup": "Jaipur", "destination": "Marathi"},
    // ];
    return this.http.get<IRideDetail[]>(this._url);
    // catch operator takes method name
  }

}
