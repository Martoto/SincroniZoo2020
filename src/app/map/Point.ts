import { Component, OnInit } from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';

declare var google;


export class Point {
    marker: any;
    pos: Array<number>;
    selected: boolean;
    available: boolean;
  
    constructor(name:string, coords: Array<number>, available: boolean, map: any, icon: any ) {
      this.pos = new google.maps.LatLng(coords[0], coords[1]);
      this.selected = false;
      this.available = available;
  
  
      this.marker = new google.maps.Marker({
        position: this.pos,
        map: map,
        //Titulo
        title: name,
        //Animação
        animation: google.maps.Animation.DROP, // BOUNCE
        //Icone
        icon: icon 
      });
  
    google.maps.event.addListener(this.marker, 'click',() => {
      console.log(this.marker.getTitle());
        if (!this.selected) {
          this.selected = true;
        } else {
          this.selected = false;
        }
      });
    }
  }
  
  export class PointsStructure {
  
    pointsArray: Array<Point>
  
  
    static icon = {
      url: './assets/icon/monkey.png', // url
      scaledSize: new google.maps.Size(44, 44), // scaled size
    };
  
    static iconG = {
      url: './assets/icon/monkey.png', // url
      scaledSize: new google.maps.Size(44, 44), // scaled size
    };
  
    unselect() {
      this.pointsArray.forEach(element => {
        element.selected = false;
      });
    }
  
    constructor (map:any) {
      this.pointsArray = [
        new Point('Animal 1',  [1.1,-52] ,true, map, PointsStructure.icon),
        new Point('Animal 2',  [1.4392181,-53.2685771] ,true, map, PointsStructure.icon),
        new Point('Animal 3',  [2.4392274,-66.2685282] ,false, map, PointsStructure.icon),
        new Point('Animal 4',  [4.4403948,-53.2682482] ,true, map, PointsStructure.icon),
        new Point('Animal 5',  [-1.4406819,-49.2672727] ,true, map, PointsStructure.icon),
        new Point('Auto animal',  [-12.4400847,-38.26811] ,true, map, PointsStructure.icon)
      ]
    }
}