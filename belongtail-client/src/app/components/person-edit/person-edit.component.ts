import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter,
  ViewChild,
  OnDestroy
} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Person } from "src/app/models/person";
import { Gender } from "src/app/models/gender";
import { UploadService } from "src/app/services/upload.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-person-edit",
  templateUrl: "./person-edit.component.html",
  styleUrls: ["./person-edit.component.scss"]
})
export class PersonEditComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild("file") file;
  @Input() person: Person;
  @Output() savePersonRequested = new EventEmitter<Person>();
  personFormGroup: FormGroup;
  genders: Gender[];
  uploadedImageSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private uploadService: UploadService
  ) {
    this.genders = [{ id: 1, desc: "Male" }, { id: 2, desc: "Female" }];
  }

  ngOnInit() {
    this.uploadedImageSubscription = this.uploadService.uploadedImage$.subscribe(
      picUrl => {
        this.person.picUrl = picUrl;
        this.personFormGroup.controls["formControlPicUrl"].setValue(picUrl);
      }
    );
  }

  ngOnDestroy() {
    if (this.uploadedImageSubscription) {
      this.uploadedImageSubscription.unsubscribe();
    }
  }
  ngOnChanges() {
    this.personFormGroup = this.formBuilder.group({
      formControlFirstName: [this.person.firstName, Validators.required],
      formControlLastName: [this.person.lastName, Validators.required],
      formControlGender: [this.person.gender, Validators.required],
      formControlPicUrl: [this.person.picUrl, Validators.required]
    });
    //this.personFormGroup.reset();
  }

  openUploadDialog() {
    this.file.nativeElement.click();
  }

  onFilesAdded() {
    const files: { [key: string]: File } = this.file.nativeElement.files;
    const filesSet: Set<File> = new Set();
    for (let key in files) {
      if (!isNaN(parseInt(key))) {
        filesSet.add(files[key]);
      }
    }
    this.uploadService.upload(filesSet);
  }

  savePerson() {
    const personUpdated: Person = {
      id: null,
      firstName: this.personFormGroup.get("formControlFirstName").value,
      lastName: this.personFormGroup.get("formControlLastName").value,
      gender: this.personFormGroup.get("formControlGender").value,
      picUrl: this.personFormGroup.get("formControlPicUrl").value,
      date: null
    };
    //this.personFormGroup.reset();
    this.savePersonRequested.emit(personUpdated);
  }
}
