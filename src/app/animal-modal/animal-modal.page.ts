import { Component, ViewChild } from "@angular/core";
import { IonInfiniteScroll } from "@ionic/angular";

const data: Array<Object> = [{}];
@Component({
  selector: "animal-modal.page",
  templateUrl: "animal-modal.page.html",
  styleUrls: ["./animal-modal.page.css"],
})
export class AnimalModal {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() {}

  loadData(event) {
    setTimeout(() => {
      console.log("Done");
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (data.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
