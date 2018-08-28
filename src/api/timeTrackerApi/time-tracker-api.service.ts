import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class TimeTrackerApiService {

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<string> {
    return this.http.get<string>('/api/time-tracker');
  }

}
