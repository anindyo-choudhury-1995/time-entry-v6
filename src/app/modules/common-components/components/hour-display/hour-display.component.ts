import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hour-display',
  templateUrl: './hour-display.component.html',
  styleUrls: ['./hour-display.component.scss']
})
export class HourDisplayComponent implements OnInit {

  @Input() serviceHours;
  @Input() nonServiceHours;
  @Input() timeOffHours;
  @Input() totalHours
  constructor() { }

  ngOnInit() {
  }

}
