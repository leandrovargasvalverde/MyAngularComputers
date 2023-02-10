import { Component, Input } from '@angular/core';
import {Computer} from 'src/model/computer.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

 @Input()
 computer!: Computer

}
