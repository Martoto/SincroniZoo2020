import {tAnimal} from '../animal-forms/tAnimal'
import { tInfractor } from '../infractor-forms/tInfractor';
import {tInfraction} from '../infraction-form/tInfraction'

export class tAuto {
    animals:tAnimal[] = []; //nao nulo
    date: string; //nao nulo
    latitude: string; //nao nulo
    longitude: string; //nao nulo
    declared_origin: string; 
    possibly_international: 1;
    vehicle: string;
    organization: string;
    individuals: tInfractor[] = [];
    infractions:tInfraction[]=[];

   
  salvarEntidade() {
      //TODO metodo para salvar entidade no banco de dados
  }
}
