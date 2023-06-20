import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Eduyexp } from 'src/app/modelo/eduyexp';
import { EduyexpserviceService } from 'src/app/servicios/eduyexpservice.service';


@Component({
  selector: 'app-edited',
  templateUrl: './edited.component.html',
  styleUrls: ['./edited.component.css']
})
export class EditedComponent implements OnInit{
 // eduyexp!:Eduyexp;
 eduyexp: Eduyexp | null = null;

  constructor(
    private  eduyexpS: EduyexpserviceService ,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    console.log(id);
    this.eduyexpS.detail(id).subscribe(
      (data: Eduyexp) => {
        this.eduyexp = data;
      },
      (err: any) => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    );
  }
/*
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.eduyexpS.update(id, this.eduyexp).subscribe(
      () => {
        this.router.navigate(['']);
      },
      (err: any) => {
        alert("Error al modificar la info");
        this.router.navigate(['']);
      }
    );
  }
  */
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params["id"];
    if (this.eduyexp) {
      this.eduyexpS.update(id, this.eduyexp).subscribe(
        (data) => {
          this.router.navigate([""]);
        },
        (err) => {
          alert("Error al modificar la informacion");
          this.router.navigate([""]);
        }
      );
    } else {
      alert("Error al modificar");
    }
  }

}
  


