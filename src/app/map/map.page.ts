import { Component, OnInit } from '@angular/core';

declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})


export class MapPage implements OnInit {
  map: any;
  mapCanvas: any;
  points: any;
  marker: any;

  constructor() { 
    
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

      const position = new google.maps.LatLng(-25.4400042, -49.2688697);

    const mapOptions = {
      zoom: 18,
      center: position,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

  ngOnInit() {
    
  }

}
