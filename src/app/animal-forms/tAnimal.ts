import { Component, Injectable, OnInit } from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';
//gera guid
const uuid = function(a,b){for(b=a='';a++<36;b+=a*51&52?(a^15?8^Math.random()*(a^20?16:4):4).toString(16):'-');return b};

export class tAnimal {
    type:string;
    id: string;
    //modulo e unidade de massa
    quantity:number;
    unit:string;
    desc: string;
    injuries: string;
    notes:string;
    forwarding:string;
    alive:string;
    
  
  //   constructor(id:string, spp:string, info:string) {
  //     this.id = id;
  //     this.spp = spp;
  //     this.info = info;
  
  // }

  salvarEntidade() {
      //TODO metodo para salvar entidade no banco de dados
  }
}
