import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../models/message';
import { Global } from './global';

@Injectable()
export class MessageService{
	public url: string;

	constructor(
		private _http: HttpClient
	){
		this.url = Global.url;
	}


	saveMessage(message: Message): Observable<any>{
		let params = JSON.stringify(message);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.post(this.url+'save-message', params, {headers: headers});
	}

	

	getMessages(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'get-messages', {headers: headers});
	}

	
}