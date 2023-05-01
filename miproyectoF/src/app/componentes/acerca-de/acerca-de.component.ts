import { Component, OnInit } from '@angular/core';
import { PortolioService } from 'src/app/servicios/portolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit{

  constructor( 
    private datosportfolio:PortolioService
     ) {    }

   ngOnInit():void {
     this.datosportfolio.obtenerDatos().subscribe(data => {
      console.log(data)
    });
   }
   
}
