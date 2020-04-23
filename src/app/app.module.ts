import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RepeatDirective } from './repeat.directive';
import { BookrideComponent } from './bookride/bookride.component';
import { RegisterComponent } from './register/register.component';
import { MessageDirective } from './message.directive';
import { ShowallridebtnDirective } from './showallridebtn.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookrideComponent,
    RegisterComponent,
    RepeatDirective,
    MessageDirective,
    ShowallridebtnDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
