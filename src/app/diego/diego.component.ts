import { Component, OnInit } from '@angular/core';
import bicis from '../../assets/free-bike-status-1.json';

@Component({
  selector: 'app-diego',
  templateUrl: './diego.component.html',
  styleUrls: ['./diego.component.css']
})
export class DiegoComponent implements OnInit {
 mybicis:Array<any> = [];
  constructor() {}

  ngOnInit(): void {
    this.leejson();

  }

  leejson(){
    this.mybicis = bicis.data.bikes;
    console.log(this.mybicis);
    console.log(bicis);
  }

}

