import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftToolbarComponent } from './left-toolbar/left-toolbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeaturesComponent } from './features/features.component';


const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'features', component: FeaturesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftToolbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
