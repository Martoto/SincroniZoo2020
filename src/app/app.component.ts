import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { HttpClient } from '@angular/common/http';
import { SpeciesServiceService } from "./services/species-service.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    //USAR URL DA PAGINA IGUAL O NOME DO FONTE DA TELA
    //Para criar nova tela usar: ionic generate <nome-pagina>
    {
      title: "Registrar auto de infração",
      url: "/auto-form",
      icon: "hand-left",
    },
    {
      title: "Guia de animais",
      url: "/animal-guide",
      icon: "information",
    },
    {
      title: "Guia legal",
      url: "/legal-guide",
      icon: "information",
    },
    {
      title: "Mapa",
      url: "/map",
      icon: "globe",
    },
  ];
  //Rótulos embaixo das telas
  public labels = ["Aves", "Macacos", "Pescados", "Répteis"];

  constructor(
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private http: HttpClient,
    private speciesService: SpeciesServiceService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    //Página principal -> /map
    this.platform.ready().then(() => {
      this.router.navigateByUrl("/map");
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    console.log("here");
 const data= this.http
      .get("https://hack-gaia-api.herokuapp.com/get_species")
      // .then((data) => {
      //   console.log("data")
      // })
      // .catch((error) => {
      //   console.log("error")
      //   console.log(error.status);
      //   console.log(error.error); // error message as string
      //   console.log(error.headers);
      // });
console.log(data)
    const path = window.location.pathname;
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
  }
}
