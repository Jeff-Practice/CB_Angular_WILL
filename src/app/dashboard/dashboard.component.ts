import { Component, OnInit } from '@angular/core';
import { CommentStmt } from '../../../node_modules/@angular/compiler';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  iconData = [
    {
      value: 26,
      istyleclass: 'fa fa-comments fa-5x',
      Value: 'New Comments!',
      divstyleclss: 'panel panel-primary'
    },
    {
      value: 12,
      istyleclass: 'fa fa-tasks fa-5x',
      Value: 'New Tasks!',
      divstyleclss: 'panel panel-green'
    },
    {
      value: 124,
      istyleclass: 'fa fa-shopping-cart fa-5x',
      Value: 'New Orders!',
      divstyleclss: 'panel panel-yellow'
    },
    {
      value: 13,
      istyleclass: 'fa fa-support fa-5x',
      Value: 'Support Tickets!',
      divstyleclss: 'panel panel-red'
    }
  ];
  ngOnInit() {
  }

}
