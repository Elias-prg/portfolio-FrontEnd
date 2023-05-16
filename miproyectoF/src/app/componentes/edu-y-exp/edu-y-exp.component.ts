import { Component, OnInit } from '@angular/core';
import { PortolioService } from 'src/app/servicios/portolio.service';
import { AcercaDeComponent } from '../acerca-de/acerca-de.component'; 
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelo/Persona';
import { Eduyexp } from 'src/app/modelo/eduyexp';
import { EduyexpserviceService } from 'src/app/servicios/eduyexpservice.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-edu-y-exp',
  templateUrl: './edu-y-exp.component.html',
  styleUrls: ['./edu-y-exp.component.css']
})
export class EduYExpComponent implements OnInit{
  
 
  //personas : Persona[] = [];
  eduyexp: Eduyexp[] = [];

  constructor(private eduyexpS: EduyexpserviceService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarInfoE();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarInfoE(): void{
    this.eduyexpS.lista().subscribe(
      data =>{
        this.eduyexp = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.eduyexpS.delete(id).subscribe(
        data => {
          this.cargarInfoE();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }

      
  
   }

   //educationData = this.miPortfolio.education:any;
 

 /*    this.datosportfolio.obtenerDatos().subscribe(data => {
      this.form.patchValue({
        education: data.education
      });
    }); 
    
    //  ngOnInit():void {
  //    this.datosportfolio.obtenerDatos().subscribe(data => {
  //     console.log(data)
  //     this.educationData=data.education;
  //     this.form.patchValue({
  //       education: data.education
  //     });
  //   });
  
    */