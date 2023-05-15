import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
//import { GuardGuard } from './servicios/guard.guard';
import { EduYExpComponent } from './componentes/edu-y-exp/edu-y-exp.component';
import { FormComponent } from './componentes/form/form.component';

const routes: Routes = [
  // Aquí puedes agregar tus rutas
  { path: 'login', component: LoginComponent },                    /*  con esto se prohiibe el acceso sin loguearse  */
  {path:'portfolio', component: PortfolioComponent},
  {path:"", component: PortfolioComponent}                                       /*---> despues agregar esto  ,canActivate:[GuardGuard] */
  /* {path:"", redirectTo:"login"}, pathMatch:"full"},
  {path:"formulario", component:FormComponent}
  { path: 'form/:id', component: EduYExpComponent} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
