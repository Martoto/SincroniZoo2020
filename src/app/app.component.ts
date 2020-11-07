import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    //USAR URL DA PAGINA IGUAL O NOME DO FONTE DA TELA
    //Para criar nova tela usar: ionic generate <nome-pagina>
    {
      title: 'Adicionar animal',
      url: '/animal-forms',
      icon: 'add-circle'
    },
    {
      title: 'Animais cadastrados',
      url: '/animal-list',
      icon: 'apps'
    },
    {
      title: 'Guia de animais',
      url: '/animal-guide',
      icon: 'information'
    },
    {
      title: 'Guia legal',
      url: '/legal-guide',
      icon: 'information'
    },
    {
      title: 'Mapa',
      url: '/map',
      icon: 'globe'
    }
  ];
  //Rótulos embaixo das telas
  public labels = ['Aves', 'Macacos', 'Pescados', 'Répteis'];

  constructor(
    private router : Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    //Página principal -> /map
    this.platform.ready().then(() => {
      this.router.navigateByUrl('/map');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname;
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
