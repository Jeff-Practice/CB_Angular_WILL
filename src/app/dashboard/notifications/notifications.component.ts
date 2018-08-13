import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  NotificationsData = [
    {
      time: '4 minutes ago',
      value: 'New Comment',
      iconclass: 'fa fa-comment fa-fw'
    },
    {
      time: '12 minutes ago',
      value: '3 New Followers',
      iconclass: 'fa fa-twitter fa-fw'
    },
    {
      time: '27 minutes ago',
      value: 'Message Sent',
      iconclass: 'fa fa-envelope fa-fw"'
    },
    {
      time: '43 minutes ago',
      value: 'New Task',
      iconclass: 'fa fa-tasks fa-fw'
    },
    {
      time: '11:32 AM',
      value: 'Server Rebooteds',
      iconclass: 'fa fa-upload fa-fw'
    },
    {
      time: '11:13 AM',
      value: 'erver Crashed!',
      iconclass: 'fa fa-bolt fa-fw'
    },
    {
      time: '10:57 AM',
      value: 'Server Not Responding',
      iconclass: 'fa fa-warning fa-fw'
    },
    {
      time: '9:49 AM',
      value: 'New Order Placed',
      iconclass: 'fa fa-shopping-cart fa-fw'
    },
    {
      time: 'Yesterday',
      value: 'Payment Received',
      iconclass: 'fa fa-money fa-fw'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
