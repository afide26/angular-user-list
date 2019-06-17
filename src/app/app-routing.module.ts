import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TableComponent } from "./table/table.component";
import { CardsComponent } from "./cards/cards.component";
const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "table", component: TableComponent },
  { path: "cards", component: CardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
