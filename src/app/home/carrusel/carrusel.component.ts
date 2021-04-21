import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  images = [
    '../../assets/imagenes/montana.jpg',
    '../../assets/imagenes/nievegato.jpg',
    '../../assets/imagenes/rio.jpg'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
