import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookride',
  templateUrl: './bookride.component.html',
  styleUrls: ['./bookride.component.css']
})
export class BookrideComponent implements OnInit {
  public btnclick: boolean = false;
  public ridedata;
  constructor() { }

  ngOnInit(): void {
  }

  getRideDetail() {
    return [
      {"id": 1, "seatsLeft": 4, "pickup": "Jabalpur", "destination": "Jaipur"},
      {"id": 2, "seatsLeft": 14, "pickup": "Bombay", "destination": "Bhopal"},
      {"id": 3, "seatsLeft": 24, "pickup": "Bhopal", "destination": "Bombay"},
      {"id": 4, "seatsLeft": 34, "pickup": "Jaipur", "destination": "Marathi"},
    ];
  }

  onshowallridebtnclick(){
    console.log(this.btnclick);
    if (!this.btnclick) {
      this.btnclick = true
      this.ridedata = this.getRideDetail()
    }
    else{
      this.btnclick = false
    }

  }

}
