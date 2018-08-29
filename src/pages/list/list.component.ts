import { Component, OnInit } from '@angular/core';
import { ListItem } from './list'

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  private item: ListItem;
  private list: ListItem[];
  constructor() {
    this.list = [
      {
        taskId: 'task03938881',
        taskName: 'Task 1',
        taskDescription: 'Description of Task',
        startDateTime: 'Aug 12 2018 16:00',
        endDateTime: 'Aug 12 2018 17:00',
        taskStatus: 'Completed',
        comments: 'This is about fixing DIT1 issue'
      },
      {
        taskId: 'task000348823',
        taskName: 'Task 2',
        taskDescription: 'Description of Task',
        startDateTime: 'Aug 12 2018 16:00',
        endDateTime: 'Aug 12 2018 17:00',
        taskStatus: 'Completed',
        comments: 'This is about fixing DIT1 issue'
      },
      {
        taskId: 'task2345677',
        taskName: 'Task 3',
        taskDescription: 'Description of Task',
        startDateTime: 'Aug 12 2018 16:00',
        endDateTime: 'Aug 12 2018 17:00',
        taskStatus: 'Completed',
        comments: 'This is about fixing DIT1 issue'
      }
    ];
  }

  ngOnInit() {
  }

}
