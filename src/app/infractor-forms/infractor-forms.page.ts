import { Component, OnInit } from "@angular/core";
import { tInfractor } from "./tInfractor";
import { InfractorServiceService } from "../services/infractor-device.service";
import { bindCallback } from "rxjs";
import { NavController } from "@ionic/angular";
@Component({
  selector: "app-infractor-forms",
  templateUrl: "./infractor-forms.page.html",
  styleUrls: ["./infractor-forms.page.scss"],
})
export class InfractorFormsPage implements OnInit {
  //entidade se refere ao animal que será criado
  failedRegistering: boolean;
  infractor: tInfractor;

  //botao cadastrar animal
  cadastraInfrator(infrator: tInfractor) {
    console.log(infrator);
    //serviço animal armazena temporariamente registro tAnimal
    this.infService.pushInfractor(infrator);
    this.navCtrl.back();
  }

  constructor(
    private infService: InfractorServiceService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}
}
