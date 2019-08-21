import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { NeedAuthGuard } from './NeedAuthGuard';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { Globals } from './globals';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AuthService, NeedAuthGuard, Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
