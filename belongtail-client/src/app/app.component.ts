import { Component } from "@angular/core";
import { Observable } from 'rxjs';
import { UploadService } from './services/upload.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "belongtail-client";
  uploadedImage$: Observable<string>;

  constructor(private uploadService: UploadService){
    this.uploadedImage$ = this.uploadService.uploadedImage$;
  }

  
}
