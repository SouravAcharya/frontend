import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  saveData(data: any) {
    return this.http.post('https://dummy.restapiexample.com/api/v1/create', data);
  }
}
