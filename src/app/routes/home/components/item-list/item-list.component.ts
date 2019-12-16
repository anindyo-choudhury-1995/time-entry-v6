import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-item-list",
    templateUrl: "./item-list.component.html",
    styleUrls: ["./item-list.component.scss"]
})
export class ItemListComponent implements OnInit {
    @Input() listItems;
    @Input() sRNumbers; 
    @Input() taskTypes;
    @Input() deliveryTypes;

    @Output() saveItem = new EventEmitter();
    @Output() deleteItem = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    deleteItemById($event) {
      this.deleteItem.emit($event);
    }
}
