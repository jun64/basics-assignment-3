import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle = false;
  toggleLog = [];

  isFifth(){
    if (this.toggleLog.length % 5 === 0){
      return 'blue';
    } else{
      return 'white';
    }
  }

  onClick(){
    this.toggleLog.push(new Date());
  }
}
