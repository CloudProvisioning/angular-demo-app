import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService, DataService]
})
export class AppComponent implements OnInit {
  isCollapsed: boolean;
  message: string;

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message);
  }
  constructor(private data: DataService) {
    this.isCollapsed = true;
  }

  newMessage(message: string) {
    this.data.changeMessage(message);
  }
}
