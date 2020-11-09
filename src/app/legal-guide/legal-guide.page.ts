import { Component, OnInit } from "@angular/core";
import { laws } from "./laws";

@Component({
  selector: "app-legal-guide",
  templateUrl: "./legal-guide.page.html",
  styleUrls: ["./legal-guide.page.scss"],
})
export class LegalGuidePage implements OnInit {
  laws = laws;
  constructor() {}

  ngOnInit() {}
}
