import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StatefulComponent } from './stateful/stateful.component';
import { StatelessComponent } from './stateless/stateless.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ReversedPipe } from './pipes/reversed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StatefulComponent,
    StatelessComponent,
    ConfirmComponent,
    ReversedPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
