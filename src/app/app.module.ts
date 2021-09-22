import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { WavesModule, ButtonsModule, InputsModule, CollapseModule, ModalModule, TooltipModule, PopoverModule
  , DropdownModule, TableModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    WavesModule,
    ButtonsModule,
    InputsModule,
    CollapseModule,
    ModalModule,
    TooltipModule,
    PopoverModule,
    DropdownModule,
    TableModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
