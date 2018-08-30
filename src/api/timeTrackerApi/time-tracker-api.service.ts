import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class TimeTrackerApiService {

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<any> {
    return this.http.get<any>('/api/time-tracker');
  }

  post(tracker: any): Observable<any> {
    return this.http.post<any>('/api/time-tracker', tracker);
  }

}
