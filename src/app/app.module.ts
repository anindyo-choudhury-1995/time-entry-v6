import { NgModule } from "@angular/core";
import {
  BrowserModule,
  HAMMER_GESTURE_CONFIG
} from "@angular/platform-browser";
import { GestureConfig } from "@angular/material";

import { MatToolbarModule } from "@angular/material/toolbar";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TopToolBarComponent } from "./components/top-tool-bar/top-tool-bar.component";

@NgModule({
  declarations: [AppComponent, TopToolBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }],
  bootstrap: [AppComponent]
})
export class AppModule {}
