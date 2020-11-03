import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Story Life';
  flag: boolean;
  constructor(private service: SharedService) {
    this.service.footer.subscribe(() => {
      this.flag = true ; 
      console.log("Flag is ::: ",this.flag); 
    }) 
  }
}