import { Component, OnInit } from '@angular/core';
import bicis from '../../assets/free-bike-status-1.json';

@Component({
  selector: 'app-gerardo',
  templateUrl: './gerardo.component.html',
  styleUrls: ['./gerardo.component.css']
})
export class GerardoComponent implements OnInit {

  mybicis: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
  this.leejson();}

  leejson(){
    this.mybicis = bicis.data.bikes;
    console.log(this.mybicis);
    console.log(bicis);
  }
}
