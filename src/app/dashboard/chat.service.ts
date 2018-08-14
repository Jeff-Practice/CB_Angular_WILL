import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }
  chatdata = [
    {
      User: 'Jack Sparrow',
      Time: '12 mins ago',
      Mes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.'
    },
    {
      User: 'Bhaumik Patel',
      Time: '13 mins ago',
      Mes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.'
    },
    {
      User: 'Jack Sparrow',
      Time: '14 mins ago',
      Mes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.'
    },
    {
      User: 'Bhaumik Patel',
      Time: '15 mins ago',
      Mes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.'
    }
  ];
}
