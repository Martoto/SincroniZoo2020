
@Injectable({
    providedIn: 'root'
  })
  //servico para injecao de dados tipo tInfractor
  export class InfractorServiceService {
    infratores:tInfractor[] = [];
  
    pushInfractor(infrator:tInfractor) {
        console.log("push",infrator)
      this.infratores.push(infrator);
    }
  
    getInfractors() {
      return this.infratores.slice();
    }
  }
  
  import { Injectable } from '@angular/core';
  import { tInfractor } from '../infractor-forms/tInfractor'
  