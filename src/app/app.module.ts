import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDataService } from './user-data.service';
import { ArrayFindComponent } from './array-find/array-find.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayFindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
