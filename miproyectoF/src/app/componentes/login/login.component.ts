import { Component , OnInit} from '@angular/core';
import { FormBuilder,FormGroup ,Validator, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 form:FormGroup;

  constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService,private ruta:Router){
   this.form=this.formBuilder.group(
    {
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.minLength(8)]],
      deviceInfo:this.formBuilder.group({
         deviceId:[""],
         deviceType:[""],
         notificationToken:[""]
      })
    }
   )
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 get Email(){
  return this.form.get("email");
 }
 
 get Password(){
  return this.form.get("password");
 }

 onEnviar(event:Event){
  event.defaultPrevented;
  this.autenticacionService.IniciarSesion(this.form.value).subscribe(data =>{
    console.log("DATA:"+ JSON.stringify(data));
    this.ruta.navigate(['/portfolio']);
  })
 }


}
/* 
const starContainer = document.getElementById('star');

for (let i = 0; i < 50; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = Math.random() * window.innerWidth + 'px';
  star.style.top = Math.random() * window.innerHeight + 'px';
  star.appendChild() */