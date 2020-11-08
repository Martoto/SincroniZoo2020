import { Component, OnInit } from '@angular/core';
import {tAnimal} from './tAnimal'
import { AnimalServiceService } from '../services/animal-service.service'
import { bindCallback } from 'rxjs';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-animal-forms',
  templateUrl: './animal-forms.page.html',
  styleUrls: ['./animal-forms.page.scss'],
})
export class AnimalFormsPage implements OnInit {
  //entidade se refere ao animal que será criado
  failedRegistering:boolean;
  animal:tAnimal;

  //botao cadastrar animal
  cadastraAnimal(animal:tAnimal) {
    console.log(animal.quantity);
    //serviço animal armazena temporariamente registro tAnimal
     this.animService.pushAnimal(animal);
     this.navCtrl.back();
  }

  constructor(private animService:AnimalServiceService, private navCtrl:NavController) { }


  ngOnInit() {
  }

}
