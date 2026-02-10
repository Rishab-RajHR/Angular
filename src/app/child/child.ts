import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
  // inputs: ['messageProp'],
})
export class Child {
  //  messageProp: string = '';
  @Input()  messageProp: string = '';
}
