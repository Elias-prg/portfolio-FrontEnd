import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { LoginComponent } from './componentes/login/login.component';
import { EduYExpComponent } from './componentes/edu-y-exp/edu-y-exp.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from  '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { PortolioService } from './servicios/portolio.service';
import { InterceptorService } from './servicios/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    LoginComponent,
    EduYExpComponent,
    ProyectosComponent,
    AcercaDeComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule
     ],
  providers: [
    PortolioService,
    {provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
