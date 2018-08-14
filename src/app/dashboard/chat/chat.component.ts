import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  constructor(public chatser: ChatService) {}
  ngOnInit() {}
  geturl(i: number): string {
    if (i % 2 === 0) {
      return 'http://placehold.it/50/55C1E7/fff';
    } else {
      return 'http://placehold.it/50/FA6F57/fff';
    }
  }
}
