
@Injectable({
    providedIn: 'root'
  })
  //servico para injecao de dados tipo tInfractor
  export class SpeciesServiceService {
    species:tSpecies[] = [];
  
    pushSpecies(spp:[tSpecies]) {
        console.log("push",spp)
      this.species.push(...spp);
      console.log(this.species)
    }
  
    getSpecies() {
      return this.species.slice();
    }
  }
  
  import { Injectable } from '@angular/core';
import { tSpecies } from '../animal-guide/tSpecies';
  