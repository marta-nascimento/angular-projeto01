import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { DisciplinaDetailsComponent } from './disciplina-details/disciplina-details.component';
import { DisciplinaDetailsNotasComponent } from './disciplina-details-notas/disciplina-details-notas.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'disciplina', component: DisciplinaComponent},
      {path: 'disciplina/:index', component: DisciplinaDetailsComponent},
      {path: 'disciplina-details/:index/:i', component: DisciplinaDetailsNotasComponent}
    ])
    ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, DisciplinaComponent, DisciplinaDetailsComponent, DisciplinaDetailsNotasComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
