import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter,
  ViewChild
} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Person } from "src/app/models/person";
import { Gender } from "src/app/models/gender";

@Component({
  selector: "app-person-edit",
  templateUrl: "./person-edit.component.html",
  styleUrls: ["./person-edit.component.scss"]
})
export class PersonEditComponent implements OnInit, OnChanges {
  @ViewChild("file") file;
  @Input() person: Person;
  @Output() savePersonRequested = new EventEmitter<Person>();
  personFormGroup: FormGroup;
  genders: Gender[];

  constructor(private formBuilder: FormBuilder) {
    this.genders = [{ id: 1, desc: "Male" }, { id: 2, desc: "Female" }];
  }

  ngOnInit() {}

  ngOnChanges() {
    this.personFormGroup = this.formBuilder.group({
      formControlFirstName: [this.person.firstName, Validators.required],
      formControlLastName: [this.person.lastName, Validators.required],
      formControlGender: [this.person.gender, Validators.required],
      formControlPicUrl: [this.person.picUrl, Validators.required]
    });
    this.personFormGroup.reset();
  }

  openUploadDialog() {
    this.file.nativeElement.click();
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
    this.personFormGroup.reset();
    this.savePersonRequested.emit(personUpdated);
  }
}
