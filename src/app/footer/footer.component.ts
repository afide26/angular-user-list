import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  author: string = "Alan Fidelino";
  year: any = new Date().getFullYear();
  footerText: string = "Angular 7 Sample Application";
  constructor() {}

  ngOnInit() {}
}
