import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { tAuto} from './tAuto'
import { Router } from '@angular/router';
import { AnimalServiceService } from '../services/animal-service.service';
import { tAnimal } from '../animal-forms/tAnimal';

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

  //botao cadastrar auto
  cadastraAuto(auto:tAuto) {
    //serviço auto armazena temporariamente registro tAuto
    //TODO conexao com servidor
  }

  addAnimal(auto:tAuto) {

    this.router.navigateByUrl('/animal-forms');

  }


  constructor(private router:Router, private animService:AnimalServiceService) { }


  ionViewDidEnter() {
    this.animals = this.animService.getAnimals();
    
  }
}
