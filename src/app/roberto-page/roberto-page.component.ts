import { Component, OnInit } from '@angular/core';
import bicis from '../../assets/free-bike-status-1.json';

@Component({
  selector: 'app-roberto-page',
  templateUrl: './roberto-page.component.html',
  styleUrls: ['./roberto-page.component.css']
})
export class RobertoPageComponent implements OnInit {
 mybicis: Array<any> = [];

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
