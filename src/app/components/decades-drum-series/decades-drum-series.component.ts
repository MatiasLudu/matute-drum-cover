import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decades-drum-series',
  templateUrl: './decades-drum-series.component.html',
  styleUrls: ['./decades-drum-series.component.css']
})
export class DecadesDrumSeriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  	window.scroll(0,0);
  }

}
