import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.scss']
})
export class AddRequestComponent implements OnInit {

  @Output() addItem = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  emitItem() {
    this.addItem.emit("addItem");
  }

}
