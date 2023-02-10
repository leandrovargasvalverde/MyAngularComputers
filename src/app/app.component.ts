import {Component} from '@angular/core';
import {computersData} from '../data/app.computer.data' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  computers = computersData;

}
