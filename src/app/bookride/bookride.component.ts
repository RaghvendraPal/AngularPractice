import { Component, OnInit } from '@angular/core';
import { RidedetailService } from '../ridedetail.service';

@Component({
  selector: 'app-bookride',
  templateUrl: './bookride.component.html',
  styleUrls: ['./bookride.component.css']
})
export class BookrideComponent implements OnInit {
  public btnclick: boolean = false;
  public ridedata;
  constructor(private _rideData: RidedetailService) { }

  ngOnInit(): void {
  }

  onshowallridebtnclick(){
    console.log(this.btnclick);
    if (!this.btnclick) {
      this.btnclick = true
      this._rideData.getRideDetail()
          .subscribe(data => this.ridedata = data);
    }
    else{
      this.btnclick = false
    }

  }

}
