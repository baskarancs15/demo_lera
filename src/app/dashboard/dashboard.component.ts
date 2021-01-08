import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public offset_my_retailers:any;
  public offset_my_banks:any;

  constructor() { }

  ngOnInit() {
  }

  click_offset_my_banks()
    {
      this.offset_my_banks = true;
      this.offset_my_retailers = false;
      // console.log("offset_my_playlist", this.offset_my_playlist)
      // this.offset_channels = false
      // this.offset_profile = false
      // this.offset_curators = false
      // this.offset_playlists = false
      // this.offset_homescreen = false
      // this.offset_Events = false
    }

    click_offset_retailers()
    {
      this.offset_my_retailers = true;
      this.offset_my_banks = false;
    }

}
