import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { MatIconModule } from "@angular/material/icon";
import {
  MatButtonModule,
  MatDialogModule,
  MatListModule,
  MatProgressBarModule
} from "@angular/material";

import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { UploadComponent } from './components/upload/upload.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [AppComponent, UploadComponent, DialogComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    MatProgressBarModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent] // Add the DialogComponent as entry component
})
export class AppModule {}
