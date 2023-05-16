import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Eduyexp } from 'src/app/modelo/eduyexp';
import { EduyexpserviceService } from 'src/app/servicios/eduyexpservice.service';

@Component({
  selector: 'app-agregareduyexp',
  templateUrl: './agregareduyexp.component.html',
  styleUrls: ['./agregareduyexp.component.css']
})
export class AgregareduyexpComponent implements OnInit{
  nombreE: string = "";
  descripcionE : string = ""; 

  constructor(private eduyexpS: EduyexpserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  

  onCreate(): void{
    const eduyexp = new Eduyexp(this.nombreE, this.descripcionE);
    this.eduyexpS.save(eduyexp).subscribe(
      data =>{
        alert("Informacion añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}


