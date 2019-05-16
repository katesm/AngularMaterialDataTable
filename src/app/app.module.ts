import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatInputModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, MatProgressSpinnerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { PeopleService } from './people-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule,MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatTableModule,MatPaginatorModule, MatProgressSpinnerModule
  ],
  providers: [ PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
