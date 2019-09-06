import { Component, OnInit } from '@angular/core';
import{Pelicula} from './pelicula'
@Component({
  selector: 'pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
  
})
export class PeliculaComponent implements OnInit {
  nombre: String;
  descripcion:String;
  imagen:String;



  pelicula: Pelicula;
  pelicula2: Pelicula;
  constructor() { 
    this.nombre="Artico"
    this.descripcion="Muy frio"
    this.imagen="https://static1.abc.es/media/sociedad/2019/03/04/artico-hielo-verano-k3IF--620x349@abc.jpg"
    //crear instancia de la clase Pelicula

    this.pelicula= new Pelicula();
    this.pelicula2=new Pelicula();
  }

  ngOnInit() {
  }

}