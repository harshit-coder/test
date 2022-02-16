import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http: HttpClient) { }

  getData()
  {
    let url='http://recruitment.roadcast.net/node_js_api';
    return this.http.get(url);
  }

}
