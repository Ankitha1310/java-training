import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { AuthorComponent } from './author/author.component';
import { GradesComponent } from './grades/grades.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { GenderPipe } from 'src/gender.pipe';
import { KolaModule } from './kola/kola.module';
import { ViewPlayersComponent } from './view-players/view-players.component';
import { SellComponent } from './sell/sell.component';



@NgModule({
  declarations: [
    AppComponent,
    GenderPipe,
    ChildComponent,
    AuthorComponent, GradesComponent, PipeDemoComponent, ViewPlayersComponent, SellComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    KolaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
