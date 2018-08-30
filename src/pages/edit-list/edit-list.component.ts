import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TimeTrackerApiService} from "@api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent implements OnInit {
  trackerForm: FormGroup;

  constructor(
    private trackerApiService: TimeTrackerApiService,
    private router: Router
  ) {
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
    this.trackerApiService.post(this.trackerForm.value).subscribe(data => this.router.navigateByUrl('/list'));
  }

}
