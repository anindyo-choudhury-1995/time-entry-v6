import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-day-tracker",
  templateUrl: "./day-tracker.component.html",
  styleUrls: ["./day-tracker.component.scss"]
})
export class DayTrackerComponent implements OnInit, OnChanges {
  @Input() selectedDay;
  @Output() selectedDate = new EventEmitter<number>();

  @Input() dayTrackers;

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.selectDayById(this.selectedDay);
  }

  selectDayById(dayId) {
    this.dayTrackers.forEach(dayObj => {
      dayObj.selected = Number(dayObj.id) - Number(dayId) === 0 ? true : false;
    });
    this.selectedDate.emit(dayId);
  }
}
