import { UserlistService } from "./../userlist.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.css"]
})
export class CardsComponent implements OnInit {
  users: Object;
  constructor(private userlist: UserlistService) {}

  ngOnInit() {
    this.userlist.getUsers().subscribe(userData => {
      this.users = userData;
      console.log("From Cards Component ", this.users);
    });
  }
}
