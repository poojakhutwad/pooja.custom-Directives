import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { CompSuccesDirective } from './comp-succes.directive';
import { CompFailureDirective } from './comp-failure.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectiveDirective,
    CompSuccesDirective,
    CompFailureDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
