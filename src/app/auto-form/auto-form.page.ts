import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { tAuto} from './tAuto'
import { Router } from '@angular/router';
import { AnimalServiceService } from '../services/animal-service.service';
import { InfractorServiceService } from "../services/infractor-device.service";

import { tAnimal } from '../animal-forms/tAnimal';
import { tInfractor } from '../infractor-forms/tInfractor';

import { HTTP } from '@ionic-native/http/ngx';
import { tSpecies } from '../animal-guide/tSpecies';
import { tInfraction } from '../infraction-form/tInfraction';
import { InfractionServiceService } from '../services/infraction-device.service';

@Component({
  selector: 'app-auto-form',
  templateUrl: './auto-form.page.html',
  styleUrls: ['./auto-form.page.scss'],
})
export class AutoFormPage {
  //entidade se refere ao auto que será criado
  failedRegistering:boolean;
  animals:tAnimal[] = [];
  infractions:tInfraction[] = [];
  auto:tAuto;
  infratores:tInfractor[] = [];
  species:tSpecies;
  

  //botao cadastrar auto
  cadastraAuto(auto:tAuto) {
    //foi a maneira mais direta de checar se nao eh nulo
     if (auto.animals.length > 0 && auto.date.length > 0 && auto.latitude.length > 0 && auto.longitude.length > 0) {
       this.sendPostRequestAuto(auto);
    } else {
    this.failedRegistering = true;
    }


  }

  addAnimal(auto:tAuto) {

    this.router.navigateByUrl('/animal-forms');

  }
  addInfrator(auto:tAuto) {

    this.router.navigateByUrl('/infractor-forms');

  }
  addInfraction(auto:tAuto) {
    this.router.navigateByUrl('/infraction-form');

  }

  sendPostRequestAuto(auto:tAuto) {
    this.http.setDataSerializer("json");
    //melhor maneira que achei pra enviar http. Poderia ser usado na forma de servico
    this.http.post('https://hack-gaia-api.herokuapp.com/create_autu', auto, {})
  .then(data => {

    console.log(data.data);
    console.log(data.status);
    console.log(data.headers);

  })
  .catch(error => {

    console.log(error.status);
    console.log(error.error); 
    console.log(error.headers);

  });
  }


  


  constructor(private router:Router, private animService:AnimalServiceService, 
    private http: HTTP,private infService:InfractorServiceService, private infractionServ:InfractionServiceService) { }


  //para recarregar as cartas sempre que entrar na tela novamente
  ionViewDidEnter() {
    this.animals = this.animService.getAnimals();
    this.infratores = this.infService.getInfractors();
    this.infractions = this.infractionServ.getInfractions();
  }
}
