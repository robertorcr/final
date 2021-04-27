import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';
import bicis from '../../assets/free-bike-status-1.json';
import { from } from 'rxjs';
import { Bicicleta } from '../Bicicleta';

@Component({
  selector: 'app-roberto-page',
  templateUrl: './roberto-page.component.html',
  styleUrls: ['./roberto-page.component.css']
})
export class RobertoPageComponent implements OnInit {
 mybicis: Bicicleta[] = [];
 dataSource : Bicicleta[] = [];

  constructor(
    public conexion: ConfigService
  ) {
  }

  ngOnInit(): void {

    this.leejson();
  }

  leejson(){
    /*this.mybicis = bicis.data.bikes;
    console.log(this.mybicis);
    console.log(bicis);*/
    //const arrayToGetObjectivesNames: Bicicleta[] = []

    this.conexion.get().subscribe((data) => {
      this.mybicis.push(data);
      console.log(this.mybicis);
    })
  }

}
