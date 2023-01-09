import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CrudoperationComponent } from './component/crudoperation/crudoperation.component';
import { GetdataComponent } from './component/getdata/getdata.component';
@NgModule({
  declarations: [
    AppComponent,
    CrudoperationComponent,
    GetdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
