import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftToolbarComponent } from './left-toolbar/left-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftToolbarComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
