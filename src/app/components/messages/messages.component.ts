import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message';
import { MessageService } from '../../services/message.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  providers: [MessageService]
})
export class MessagesComponent implements OnInit {
	public messages: any;
  	public url: string;
  constructor(
  		private _messageService: MessageService
  	) { 
  	this.url = Global.url;
  }

  ngOnInit(): void {
  	window.scroll(0,0);
  	this.getMessages();

  }

  getMessages(){
  	this._messageService.getMessages().subscribe(
  		response => {
  			if(response.messages){
  				this.messages = response.messages;
  				console.log(this.messages.email);
  			}
  		},
  		error => {
  			console.log(<any>error);
  		}
  	);
  }

}


  

  


