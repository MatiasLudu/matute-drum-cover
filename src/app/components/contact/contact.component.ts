import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message';
import { MessageService } from '../../services/message.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [MessageService]
})
export class ContactComponent implements OnInit {
	public title: string;
	public message: Message;
	public save_message: any;
	public status: string;
	public url: string;
  constructor(
  	private _messageService: MessageService
  	) { 
  		this.title = "Contacto";
		this.message = new Message('','','');
		this.status = "";
		this.url = Global.url;
  	}

  ngOnInit(): void {
  	window.scroll(0,0);
  }

  onSubmit(form: any){

		//Guardar datos básicos
		this._messageService.saveMessage(this.message).subscribe(
			response => {
				if(response.message){
					this.save_message = response.message;
							this.status = 'success';
							form.reset();
				}else{
					this.save_message = response.message;
						this.status = 'success';
						form.reset();
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}

	

}






	