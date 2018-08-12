import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  @Input()
  item;
  @Input()
  id;
  constructor() { }

  ngOnInit() {
  }

}
