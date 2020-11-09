import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { tInfraction } from './tInfraction';
import { InfractionServiceService } from '../services/infraction-device.service';
@Component({
  selector: "app-infractor-forms",
  templateUrl: "./infraction-form.page.html",
  styleUrls: ["./infraction-form.page.scss"],
})
export class InfractionFormPage implements OnInit {
  //entidade se refere ao animal que será criado
  failedRegistering: boolean;

  //botao cadastrar infracao
  cadastraInfraction(infraction: tInfraction) {
    console.log(infraction);
    //serviço animal armazena temporariamente registro tInfraction
    this.infService.pushInfraction(infraction);
    this.navCtrl.back();
  }

  constructor(
    private infService: InfractionServiceService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}
}
