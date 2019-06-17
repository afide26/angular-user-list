import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import bootstrap from "bootstrap";

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { TableComponent } from "./table/table.component";
import { CardsComponent } from "./cards/cards.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TableComponent,
    CardsComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
