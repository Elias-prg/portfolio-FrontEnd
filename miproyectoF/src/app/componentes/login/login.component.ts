import { Component , OnInit} from '@angular/core';
import { FormBuilder,FormGroup ,Validator, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginUsuario } from 'src/app/modelo/login-usuario';
//import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 //form:FormGroup;
 isLogged = false;
 isLogginFail = false;
 loginUsuario!: LoginUsuario;
 nombreUsuario!: string;
 password! : string;
 roles: string[] = [];
 errMsj!: string;

 constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  } 
  
  onLogin(): void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
    this.authService.login(this.loginUsuario).subscribe(data =>{
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate([''])
      }, err =>{
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
        
      })
  }

  onLoginSuccess() {
     this.router.navigate(['/portfolio']);
    }


}
/* 
INVESTIGAR COMO UTILIZAR BINE ESA FOMAR DE LOGIN TANTO EN BACK COMO PARA FRONT ,
const starContainer = document.getElementById('star');

for (let i = 0; i < 50; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = Math.random() * window.innerWidth + 'px';
  star.style.top = Math.random() * window.innerHeight + 'px';
  star.appendChild() 
  
  
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
  
  */