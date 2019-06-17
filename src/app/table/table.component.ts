import { UserlistService } from "./../userlist.service";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  users: Object;
  constructor(private userlist: UserlistService) {}

  ngOnInit() {
    this.userlist.getUsers().subscribe(userData => {
      this.users = userData;
      console.log("From Table Component ", this.users[0].name);
    });
  }
}
