import { Injectable } from '@angular/core';

@Injectable()
export class TimeTrackerApiService {

  constructor() { }

  get(): string {
    return 'hello world';
  }

}
