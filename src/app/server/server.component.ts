import { Component, OnInit, Input } from '@angular/core';
import { Server } from '../shared/server';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }
  @Input() serverInput:Server;

  ngOnInit(): void {
    this.SetServerStatus(this.serverInput.isOnline);
  }

  color:string;
  buttonText:string;

  toggleStatus(onLineStatus:boolean){
    console.log(this.serverInput.name, '; ', onLineStatus);
    this.SetServerStatus(!onLineStatus);
  }

  SetServerStatus(isOnLine:boolean){
    if(isOnLine)
    {
      this.serverInput.isOnline = true;
      this.color = '#66BB6A';
      this.buttonText = 'Shut Down';
    }
    else
    {
      this.serverInput.isOnline = false;
      this.color = '#FF6B6B';
      this.buttonText = 'Start';

    }
  }
}
