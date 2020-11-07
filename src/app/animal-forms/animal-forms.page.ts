import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-forms',
  templateUrl: './animal-forms.page.html',
  styleUrls: ['./animal-forms.page.scss'],
})
export class AnimalFormsPage implements OnInit {

  constructor() { }

   user = {
    name: '',
    email: '',
    passcode: '',
  }

  ngOnInit() {
  }

}
