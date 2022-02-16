import { Component } from '@angular/core';
import {ApicallService} from './apicall.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  data:any = [];
  constructor(private user: ApicallService)
  {
    this.user.getData().subscribe(data=>{
      this.data  = data
      console.log(this.data)
    })
  }
}
