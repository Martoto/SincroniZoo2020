
@Injectable({
    providedIn: 'root'
  })
  //servico para injecao de dados tipo tInfraction
  export class InfractionServiceService {
    infractions:tInfraction[] = [];
  
    pushInfraction(infraction:tInfraction) {
        console.log("push",infraction)
      this.infractions.push(infraction);
    }
  
    getInfractions() {
      return this.infractions.slice();
    }
  }
  
  import { Injectable } from '@angular/core';
import { tInfraction } from '../infraction-form/tInfraction';
  