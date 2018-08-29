import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent implements OnInit {
  trackerForm: FormGroup;

  constructor() {
    this.trackerForm = new FormGroup({
      name: new FormControl(''),
      startTime: new FormControl(''),
      endTime: new FormControl(''),
      description: new FormControl(''),
      status: new FormControl(''),
      comments: new FormControl('')
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submit');
  }

}
