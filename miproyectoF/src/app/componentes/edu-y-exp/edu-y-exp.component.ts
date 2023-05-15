import { Component, OnInit } from '@angular/core';
import { PortolioService } from 'src/app/servicios/portolio.service';
import { AcercaDeComponent } from '../acerca-de/acerca-de.component'; 
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelo/Persona';

@Component({
  selector: 'app-edu-y-exp',
  templateUrl: './edu-y-exp.component.html',
  styleUrls: ['./edu-y-exp.component.css']
})
export class EduYExpComponent implements OnInit{
  educationData:any;

  form = new FormGroup({
    education: new FormControl('')
  });
 
  personas : Persona[] = [];
  constructor( 
       private datosportfolio:PortolioService ,
       private router: Router 
     ) {        }
   

     ngOnInit() {
      this.datosportfolio.obtenerDatos().subscribe(data => {
        this.educationData = data.education;
      });
      this.datosportfolio.obtenerDatos().subscribe(data => {
        this.personas = data ;
      })
    }

   editEducation(index: number) {
  this.form.patchValue(this.educationData[index]);
}

      
  //  ngOnInit():void {
  //    this.datosportfolio.obtenerDatos().subscribe(data => {
  //     console.log(data)
  //     this.educationData=data.education;
  //     this.form.patchValue({
  //       education: data.education
  //     });
  //   });
  
   }

   //educationData = this.miPortfolio.education:any;
 

 /*    this.datosportfolio.obtenerDatos().subscribe(data => {
      this.form.patchValue({
        education: data.education
      });
    }); */