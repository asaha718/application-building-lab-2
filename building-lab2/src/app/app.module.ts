import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { BadgeComponent } from './badge/badge.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { LabelComponent } from './label/label.component';
import { InputBoxComponent } from './input-box/input-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownComponent,
    BadgeComponent,
    CheckboxComponent,
    LabelComponent,
    InputBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
