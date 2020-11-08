import {tAnimal} from '../animal-forms/tAnimal'

export class tAuto {
    animals:tAnimal[] = [];
    date: string;
    latitude: string;
    longitude: string;
    declared_origin: string;
    possibly_international: 1;
    vehicle: string;
    organization: string;
    // individuals: tIndividuals[]=[];
    // infractions:tInfractions[]=[];

  //   constructor(id:string, animais:animalList, info:string) {
  //     this.id = id;
  //     this.animais = animais;
  //     this.info = info;
  
  // }

  salvarEntidade() {
      //TODO metodo para salvar entidade no banco de dados
  }
}
