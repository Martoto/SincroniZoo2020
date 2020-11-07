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
        new Point('UTFPR Entrada Sul',  [-48.079167,-8.06667] ,true, map, PointsStructure.icon),
        new Point('UTFPR Bloco C',  [-25.4392181,-49.2685771] ,true, map, PointsStructure.icon),
        new Point('UTFPR TUBO',  [-25.4392274,-49.2685282] ,false, map, PointsStructure.iconG),
        new Point('Silva Jardim',  [-25.4403948,-49.2682482] ,true, map, PointsStructure.icon),
        new Point('Alegria',  [-25.4406819,-49.2672727] ,true, map, PointsStructure.icon),
        new Point('Harmonia',  [-25.4400847,-49.26811] ,true, map, PointsStructure.icon)
      ]
    }
}