import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/item/item.component';
import { TotalComponent } from './components/total/total.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsComponent,
    ItemComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
