import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getBeer()
  {
    return this.http.get("http://localhost:8080/api/v1/person");
  }

}
