import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Group } from '../models/group.model';
import { ClassId } from '../models/classId.model';

@Injectable({
  providedIn: 'root'
})
export class NewStudingYearService {
  constructor(private http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getGroups(): Observable<Group[]> {
    return this.http
      .get<Group[]>('classes', this.httpOptions)
      .map((response: any) => {
        return response.data;
      })
      .catch((error: any) => {
        return throwError(error);
      });
  }
  postNewGroups(): Observable<any> {
    return this.http
      .post<any>('transition', this.httpOptions)
      .map((response: any) => {
        return response.data;
      })
      .catch((error: any) => {
        return throwError(error);
      });
  }
  putNewOldId(idObject: any[]): Observable<any[]> {
    return this.http
      .put<any[]>('transition', idObject)
      .map((response: any) => {
        return response.data;
      })
      .catch((error: any) => {
        return throwError(error);
      });
  }
}