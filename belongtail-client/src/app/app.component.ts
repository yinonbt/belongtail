import { Component } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "belongtail-client";

  constructor(private http: HttpClient){}

  setFiles(event) {
    let files = event.srcElement.files;
    if (!files) {
      return;
    }

    let path = `${environment.apiUrl}upload`;
    let data = {
      patientData: {
        uid: "",
        firstName: "",
        lastName: "",
        gender: "Not Specified",
        dateOfBirth: ""
      }
    };
    // let headers = new HttpHeaders()
    //   .set('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW')
    // let headers = new HttpHeaders().set('content-type', 'multipart/form-data')
    const formData: FormData = new FormData();

    // for (let i = 0; i < files.length; i++) {
    //   formData.append(i.toString(), files[i], files[i].name);
    // }
    formData.append('wallpaper', files[0], files[0].name);
    formData.append("data", JSON.stringify(data));
    this.http.post(path, formData).subscribe(r => {
      console.log("got r", r);
    });
  }
}
