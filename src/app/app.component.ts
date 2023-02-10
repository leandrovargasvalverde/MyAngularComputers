import {Component} from '@angular/core';
import {computersData} from '../data/app.computer.data' 
import {Computer} from 'src/model/computer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  computers = computersData;

}
