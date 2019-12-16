import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-edit-details",
    templateUrl: "./edit-details.component.html",
    styleUrls: ["./edit-details.component.scss"]
})
export class EditDetailsComponent implements OnInit {
    @Input() selectedSRNumber;
    @Input() isNew;
    @Input() id;
    @Input() selectedTaskType;
    @Input() selectedDeliveryType;
    @Input() time;
    @Input() note;
    @Input() sRNumbers
    @Input() taskTypes
    @Input() deliveryTypes

    @Output() saveItem = new EventEmitter();
    @Output() deleteItem = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    deleteItemById(id) {
      this.deleteItem.emit(id);
    }

    saveItemById(id) {
      this.deleteItem.emit(id);
    }
}
