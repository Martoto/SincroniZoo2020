import { Component, OnInit } from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';
import {PointsStructure} from './Point'
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

  @ViewChild('map', {read:ElementRef, static:false}) mapRef : ElementRef;


  constructor() { 
    
  }

  addAnimal() {
    
  }


  loadMap() {
    console.log("Carregou mapa");
      const position = new google.maps.LatLng(-25.4400042, -49.2688697);

    //config do mapa
    const mapOptions = {
      zoom: 18,
      center: position,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    this.points = new PointsStructure(this.map);
  }

  ngOnInit() {
    this.loadMap();
  }

}
