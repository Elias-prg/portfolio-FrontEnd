import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
//import { GuardGuard } from './servicios/guard.guard';
//import { EduYExpComponent } from './componentes/edu-y-exp/edu-y-exp.component';
//import { FormComponent } from './componentes/form/form.component';
import { AgregareduyexpComponent } from './componentes/edu-y-exp/agregareduyexp.component';
import { EditedComponent } from './componentes/edu-y-exp/edited.component';

const routes: Routes = [
  // Aquí puedes agregar tus rutas
  { path: 'login', component: LoginComponent },                         /*  con esto se prohiibe el acceso sin loguearse con el service del curso  */
  {path:'portfolio', component: PortfolioComponent},                    /* ver en otro momento ---> despues agregar esto  ,canActivate:[GuardGuard] */
  {path:'', component: PortfolioComponent}  ,                                     
  {path: 'agregarinfo' , component: AgregareduyexpComponent},
  {path:'editarinfo/:id', component:  EditedComponent }
 //{path:"editarinfo/{{id}}", component:EditedComponent}

/* {path:"", redirectTo:"login"}, pathMatch:"full"},
  { path: 'form/:id', component: EduYExpComponent} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
