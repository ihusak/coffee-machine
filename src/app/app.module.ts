import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {HttpModule} from '@angular/http';
import {PanelService} from './panel/panel.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'panel', component: PanelComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [PanelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
