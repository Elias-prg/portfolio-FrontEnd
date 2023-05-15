import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PortolioService } from 'src/app/servicios/portolio.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form = new FormGroup({
    escuela: new FormControl(''),
    titulo: new FormControl(''),
    imagen: new FormControl(''),
    carrera: new FormControl(''),
    puntaje: new FormControl(''),
    inicio: new FormControl(''),
    fin: new FormControl(''),
   
  });

  constructor(private datosportfolio: PortolioService) {}

  ngOnInit() {
    this.datosportfolio.obtenerDatos().subscribe(data => {
      this.form.patchValue(data);
    });
  }

    onSubmit() {
      this.datosportfolio.editar(this.form.value).subscribe();
   }
 

  onAdd() {
    this.datosportfolio.postData(this.form.value).subscribe();
  }

}
