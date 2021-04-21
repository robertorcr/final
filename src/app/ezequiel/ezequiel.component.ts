import { Component, OnInit } from '@angular/core';
import bicis from '../../assets/free-bike-status-1.json';
@Component({
  selector: 'app-ezequiel',
  templateUrl: './ezequiel.component.html',
  styleUrls: ['./ezequiel.component.css']
})
export class EzequielComponent implements OnInit {
mybicis: Array<any>=[];
  
constructor() { }

  ngOnInit(): void {
  this.leejson();
  }
leejson() {
  this.mybicis=bicis.data.bikes;
  console.log(this.mybicis);
  console.log(bicis);
}
}
