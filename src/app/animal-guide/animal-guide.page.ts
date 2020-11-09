import { Component, OnInit } from "@angular/core";
import { HTTP } from '@ionic-native/http/ngx';
import { tSpecies } from './tSpecies';

@Component({
  selector: "app-animal-guide",
  templateUrl: "./animal-guide.page.html",
  styleUrls: ["./animal-guide.page.scss"],
})
export class AnimalGuidePage implements OnInit {
  species:tSpecies[] = [];
  constructor(private http: HTTP) {}

  
  sendGetRequest() {
    this.http.setDataSerializer("json");
    //melhor maneira que achei pra enviar http. Poderia ser usado na forma de servico
    this.http.get('https://hack-gaia-api.herokuapp.com/get_species', {} , {})
  .then(data => {

    this.species.push  = data.data
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
  ngOnInit() {}
}
