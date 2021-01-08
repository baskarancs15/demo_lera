import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = environment.apiURL;

  constructor(private http: HttpClient) { }

  login(data:any){
    return this.http.post(this.url + '/api/login', data)
  }
}
