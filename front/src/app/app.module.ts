import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatefulComponent } from './stateful/stateful.component';
import { StatelessComponent } from './stateless/stateless.component';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    StatefulComponent,
    StatelessComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
