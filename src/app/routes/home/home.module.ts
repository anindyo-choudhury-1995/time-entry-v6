import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";

import { HomeRoutingModule } from "./home-routing.module";
import { CommonComponentsModule } from "../../modules/common-components/common-components.module";

import { HomeComponent } from "./home.component";
import { ItemListComponent } from "./components/item-list/item-list.component";
import { AddRequestComponent } from "./components/add-request/add-request.component";

@NgModule({
    declarations: [HomeComponent, ItemListComponent, AddRequestComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatIconModule,
        MatButtonModule,
        MatExpansionModule,
        HomeRoutingModule,
        CommonComponentsModule
    ]
})
export class HomeModule {}
