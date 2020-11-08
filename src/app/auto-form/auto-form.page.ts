import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { tAuto} from './tAuto'
import { Router } from '@angular/router';
import { AnimalServiceService } from '../services/animal-service.service';
import { InfractorServiceService } from "../services/infractor-device.service";

import { tAnimal } from '../animal-forms/tAnimal';
import { tInfractor } from '../infractor-forms/tInfractor';

@Component({
  selector: 'app-auto-form',
  templateUrl: './auto-form.page.html',
  styleUrls: ['./auto-form.page.scss'],
})
export class AutoFormPage {
  //entidade se refere ao auto que será criado
  failedRegistering:boolean;
  animals:tAnimal[] = [];
  auto:tAuto;
  infratores:tInfractor[] = [];
  

  //botao cadastrar auto
  cadastraAuto(auto:tAuto) {
    //serviço auto armazena temporariamente registro tAuto
    //TODO conexao com servidor
  }

  addAnimal(auto:tAuto) {

    this.router.navigateByUrl('/animal-forms');

  }




  addInfrator(auto:tAuto) {

    this.router.navigateByUrl('/infractor-forms');

  }


  constructor(private router:Router, private animService:AnimalServiceService,private infService:InfractorServiceService) { }


  ionViewDidEnter() {
    this.animals = this.animService.getAnimals();
    this.infratores = this.infService.getInfractors();

  }
}
