import { Component, OnInit } from '@angular/core';
import bicis from '../../assets/free-bike-status-1.json';

@Component({
  selector: 'app-renato',
  templateUrl: './renato.component.html',
  styleUrls: ['./renato.component.css']
})
export class RenatoComponent implements OnInit {
  mybicis: Array<any> = [];


  constructor() { }

  ngOnInit(): void {
    this.leejson();
  }

  leejson(){
    this.mybicis = bicis.data.bikes;
    console.log(this.mybicis);
    console.log(bicis);
  }

}
