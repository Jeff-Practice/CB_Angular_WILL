import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chat',
  templateUrl: './bar-chat.component.html',
  styleUrls: ['./bar-chat.component.css']
})
export class BarChatComponent implements OnInit {
  constructor() {}
  tabledata = [
    {
      id: '3326',
      Date: '10/21/2013',
      Time: '3:29 PM',
      Amount: '321.33'
    },
    {
      id: '3325',
      Date: '10/21/2013',
      Time: '3:20 PM',
      Amount: '234.34'
    },
    {
      id: '3324',
      Date: '10/21/2013',
      Time: '3:03 PM',
      Amount: '724.17'
    },
    {
      id: '3323',
      Date: '10/21/2013',
      Time: '3:00 PM',
      Amount: '23.71'
    },
    {
      id: '3322',
      Date: '10/21/2013',
      Time: '2:49 PM',
      Amount: '8345.23'
    },
    {
      id: '3321',
      Date: '10/21/2013',
      Time: '2:23 PM',
      Amount: '245.12'
    },
    {
      id: '3320',
      Date: '10/21/2013',
      Time: '2:15 PM',
      Amount: '5663.54'
    },
    {
      id: '3319',
      Date: '10/21/2013',
      Time: '2:13 PM',
      Amount: '943.45'
    }
  ];
  ngOnInit() {}
}
