import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
    selector: "app-date-input",
    templateUrl: "./date-input.component.html",
    styleUrls: ["./date-input.component.scss"]
})
export class DateInputComponent implements OnInit {

    @Output() selectedDate = new EventEmitter<Date>();

    minStartDate = new Date("14 Dec 2019");
    maxStartDate = new Date("20 Dec 2019");

    @Input() startDate = new Date();
    endDate = new Date();

    sliderChecked = false;
    constructor() {}

    ngOnInit() {}

    addEvent(event: MatDatepickerInputEvent<Date>) {
    this.selectedDate.emit(event.value);
  }
}
