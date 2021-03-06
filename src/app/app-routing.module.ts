import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookrideComponent } from './bookride/bookride.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'bookride', component: BookrideComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [LoginComponent, BookrideComponent]
