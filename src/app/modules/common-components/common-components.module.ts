import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material";
import { MatNativeDateModule } from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
import { MatSliderModule } from "@angular/material/slider";
import { MatSelectModule } from "@angular/material/select";

import { DateInputComponent } from "./components/date-input/date-input.component";
import { HourDisplayComponent } from "./components/hour-display/hour-display.component";
import { DayTrackerComponent } from "./components/day-tracker/day-tracker.component";
import { EditDetailsComponent } from "./components/edit-details/edit-details.component";

@NgModule({
    declarations: [
        DateInputComponent,
        HourDisplayComponent,
        DayTrackerComponent,
        EditDetailsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatSliderModule,
        MatSelectModule
    ],
    exports: [
        DateInputComponent,
        HourDisplayComponent,
        DayTrackerComponent,
        EditDetailsComponent
    ]
})
export class CommonComponentsModule {}
