import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'miproyectoF';
  datosportfolio: any;

  submitData(value: any) {            /* esto seria para el metodo post ver y ver en que lugar iria si aca o en cada .ts de los componentes   */
    let body = {
      name: value.name,
      age: value.age
    }

    this.datosportfolio.postData(body)
      .subscribe((response: any) => {
        console.log(response)
      })
  }
  updateData(value: any) {               /*  Lo mismo que con el submit y MODIFICAR COMO CORRESPONDA */
    let body = {
      name: value.name,
      age: value.age
    }
    this.datosportfolio.updateData(body, `622ca8c59f6c668226f74f52`)
      .subscribe((response: any) => {
        console.log(response)
      })
    }
    
    delete() {
      this.datosportfolio.deleteData(`622c573cf23ce54e445b2bed`)
        .subscribe((response: any) => {
          console.log(response);
        })
    }

}
