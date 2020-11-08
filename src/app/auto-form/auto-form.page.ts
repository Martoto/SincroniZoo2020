import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { tAuto} from './tAuto'
import { Router } from '@angular/router';
import { AnimalServiceService } from '../services/animal-service.service';
import { tAnimal } from '../animal-forms/tAnimal';
import { HTTP } from '@ionic-native/http/ngx';
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

  sendPostRequestAuto(auto:tAuto) {
    this.http.get('https://ionic.io', {}, {})
  .then(data => {

    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);

  })
  .catch(error => {

    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
  }


  constructor(private router:Router, private animService:AnimalServiceService, private http: HTTP) { }


  //para recarregar as cartas sempre que entrar na tela novamente
  ionViewDidEnter() {
    this.animals = this.animService.getAnimals();
  }
}
