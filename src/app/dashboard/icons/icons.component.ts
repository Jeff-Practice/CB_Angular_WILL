import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  @Input()
  item;
  constructor() { }
  ngOnInit() {
  }

}
