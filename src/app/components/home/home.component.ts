import { Component, OnInit } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  	window.scroll(0,0);
  	$('.bxslider').bxSlider({
	    mode: 'fade',
	    captions: true,
	    slideWidth: 900,
	    adaptiveHeight: true,
		responsive: true
	  });
  }

}
