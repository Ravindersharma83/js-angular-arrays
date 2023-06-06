import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDataService } from './user-data.service';
import { ArrayFindComponent } from './array-find/array-find.component';
import { ArrayMapComponent } from './array-map/array-map.component';
import { ArrayPracticeComponent } from './array-practice/array-practice.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayFindComponent,
    ArrayMapComponent,
    ArrayPracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
