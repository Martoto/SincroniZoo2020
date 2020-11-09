import { Component, OnInit } from "@angular/core";
import { tSpecies } from "./tSpecies";
import { HttpClient } from '@angular/common/http';
import { SpeciesServiceService } from "../services/species-service.service";


@Component({
  selector: "app-animal-guide",
  templateUrl: "./animal-guide.page.html",
  styleUrls: ["./animal-guide.page.scss"],
})
export class AnimalGuidePage implements OnInit {
  species:tSpecies[]=[];


  Get() {
    console.log("here")
    this.http.get('https://hack-gaia-api.herokuapp.com/get_species')
  // .then(data => {
  //   this.speciesService.pushSpecies(JSON.parse(data.data)); // data received by server
    
  // })
  // .catch(error => {

  //   console.log(error.status);
  //   console.log(error.error); // error message as string
  //   console.log(error.headers);

  // });
  }

  consolel(spp){console.log(spp)}

  ionViewDidEnter() {
    this.species = this.speciesService.getSpecies();

  }

  constructor(private http: HttpClient, private speciesService:SpeciesServiceService) {}

  ngOnInit() {}
}
