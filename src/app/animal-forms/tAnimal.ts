import { Component, Injectable, OnInit } from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';


export class tAnimal {
    type:string;
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
