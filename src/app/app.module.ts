import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RepeatDirective } from './repeat.directive';
import { BookrideComponent } from './bookride/bookride.component';
import { RegisterComponent } from './register/register.component';
import { MessageDirective } from './message.directive';
import { ShowallridebtnDirective } from './showallridebtn.directive';
import { RidedetailService } from './ridedetail.service';
import { HttpClientModule } from '@angular/common/http';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';


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
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [RidedetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
