import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serversCreationStatus: string = 'No server was created !!';
  serverName: string = 'TestServer';
  /*userName: string = "";*/

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serversCreationStatus = this.serverName + ' Server was created !!';
  }

  onUpdateServerName(event){
    this.serverName = event.target.value;
  }

  /*onUserNameBtnClick(){
    this.userName = '';
  }*/

}
