
@Injectable({
  providedIn: 'root'
})
//servico para injecao de dados tipo tAnimal
export class AnimalServiceService {
  animals:tAnimal[] = [];

  pushAnimal(animal:tAnimal) {
    this.animals.push(animal);
  }

  getAnimals() {
    return [...this.animals];
  }
}

import { Injectable } from '@angular/core';
import { tAnimal } from '../animal-forms/tAnimal'
