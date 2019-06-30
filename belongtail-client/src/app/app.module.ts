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
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { UploadComponent } from "./components/upload/upload.component";
import { DialogComponent } from "./components/dialog/dialog.component";
import { PersonsRootComponent } from "./components/persons-root/persons-root.component";
import { PersonEditComponent } from "./components/person-edit/person-edit.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { PersonsListComponent } from './components/persons-list/persons-list.component';
import { PersonsListItemComponent } from './components/persons-list-item/persons-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    DialogComponent,
    PersonsRootComponent,
    PersonEditComponent,
    PersonsListComponent,
    PersonsListItemComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatListModule,
    MatProgressBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent] // Add the DialogComponent as entry component
})
export class AppModule {}
