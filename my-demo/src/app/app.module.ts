import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { LastPageComponent } from './last-page/last-page.component';
import { HttpService } from 'src/app/http.service';
import { FormsModule } from "@angular/forms" 
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    LastPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
