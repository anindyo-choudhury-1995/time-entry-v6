import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  newDate = [
    new Date("14 Dec 2019"),
    new Date("15 Dec 2019"),
    new Date("16 Dec 2019"),
    new Date("17 Dec 2019"),
    new Date("18 Dec 2019"),
    new Date("19 Dec 2019"),
    new Date("20 Dec 2019")
  ];

  dayTrackers = [
    {
      time: 0,
      day: "S",
      id: this.newDate[0],
      selected: false
    },
    {
      time: 0,
      day: "S",
      id: this.newDate[1],
      selected: false
    },
    {
      time: 0,
      day: "M",
      id: this.newDate[2],
      selected: false
    },
    {
      time: 0,
      day: "T",
      id: this.newDate[3],
      selected: false
    },
    {
      time: 0,
      day: "W",
      id: this.newDate[4],
      selected: false
    },
    {
      time: 0,
      day: "T",
      id: this.newDate[5],
      selected: false
    },
    {
      time: 0,
      day: "F",
      id: this.newDate[6],
      selected: true
    }
  ];

  listItems = [
    {
      id: 0,
      isNew: false,
      srNumber: "Customer Workshop or Cloud Day",
      taskType: "Training/Personal Development - Taken",
      deliveryType: "Face To Face",
      time: 1,
      date: new Date("16 Dec 2019"),
      note:
        "Customer Workshop or Cloud Day Training/Personal Development - Taken Face To Face"
    },
    {
      id: 1,
      isNew: false,
      srNumber:
        "Cloud Coach-sanela.hodzic@oracle.com-Oracle University (CHICAGO, US) - 225(REDWOOD CITY, US)",
      taskType: "Corporate Citizenship",
      deliveryType: "Remote",
      time: 2,
      date: new Date("20 Dec 2019"),
      note: ""
    },
    {
      id: 2,
      isNew: false,
      srNumber:
        "Discovery-sanela.hodzic@oracle.com-Oracle University (CHICAGO, US) - 225(REDWOOD CITY, US)",
      taskType: "Follow-up",
      deliveryType: "Face to Face",
      time: 1,
      date: new Date("20 Dec 2019"),
      note: ""
    },
    {
      id: 3,
      isNew: false,
      srNumber: "Non Service",
      taskType: "Time Off",
      deliveryType: "",
      time: 1,
      date: new Date("20 Dec 2019"),
      note: ""
    },
    {
      id: 4,
      isNew: false,
      srNumber: "Non Service",
      taskType: "Follow Up",
      deliveryType: "Face to Face",
      time: 1,
      date: new Date("20 Dec 2019"),
      note: ""
    }
  ];

  selectedDay = new Date("16 Dec 2019");

  filteredListItems = this.listItems.filter(
    u => Number(u.date) - Number(this.selectedDay) === 0
  );

  sRNumbers = [
    { value: "Customer Workshop or Cloud Day" },
    {
      value:
        "Cloud Coach-sanela.hodzic@oracle.com-Oracle University (CHICAGO, US) - 225(REDWOOD CITY, US)"
    },
    {
      value:
        "Discovery-sanela.hodzic@oracle.com-Oracle University (CHICAGO, US) - 225(REDWOOD CITY, US)"
    },
    { value: "Non Service" }
  ];
  taskTypes = [
    { value: "Training/Personal Development - Taken" },
    { value: "Corporate Citizenship" },
    { value: "Follow-up" }
  ];
  deliveryTypes = [{ value: "Remote" }, { value: "Face To Face" }];

  serviceHours = 0;

  nonServiceHours = 0;

  timeOffHours = 0;

  totalHours = 0;

  constructor() {}

  ngOnInit() {
    this.calculateHours();
  }

  calculateHours() {
    this.serviceHours = 0;
    this.nonServiceHours = 0;
    this.timeOffHours = 0;
    this.totalHours = 0;
    this.dayTrackers.forEach(day => {
      day.time = 0;
    })
    this.listItems.forEach(listItem => {
      if (listItem.taskType === "Time Off") {
        this.timeOffHours += listItem.time;
      } else if (listItem.srNumber === "Non Service") {
        this.nonServiceHours += listItem.time;
      } else {
        this.serviceHours += listItem.time;
      }
      this.totalHours += listItem.time;

      this.dayTrackers.forEach(day => {
        if (Number(day.id) - Number(listItem.date) === 0) {
          day.time += listItem.time;
        }
      });
    });
  }

  selectedDateInputTracker($event) {
    this.selectedDay = $event;
    this.filteredListItems = this.listItems.filter(
      u => Number(u.date) - Number(this.selectedDay) === 0
    );
  }
  selectedDateDayTracker($event) {
    this.selectedDay = $event;
    this.filteredListItems = this.listItems.filter(
      u => Number(u.date) - Number(this.selectedDay) === 0
    );
  }
  addItem($event) {
    let maxId = this.listItems.reduce((prev, current) =>
      prev.id > current.id ? prev : current
    ).id + 1;
    this.listItems.push({
      id: maxId,
      isNew: true,
      srNumber: "",
      taskType: "",
      deliveryType: "",
      time: 0,
      date: this.selectedDay,
      note: ""
    });
    this.filteredListItems = this.listItems.filter(
      u => Number(u.date) - Number(this.selectedDay) === 0
    );
  }
  deleteItemById($event) {
    console.log($event);
    // console.log(this.listItems.filter(listItem => listItem.id !== $event));
    // console.log(this.listItems.filter(
    //   u => Number(u.date) - Number(this.selectedDay) === 0
    // ));
    this.listItems = this.listItems.filter(listItem => listItem.id !== $event);
    console.log(this.listItems);
    this.filteredListItems = this.listItems.filter(
      u => Number(u.date) - Number(this.selectedDay) === 0
    );
    console.log(this.filteredListItems);
    this.calculateHours();
  }
}
