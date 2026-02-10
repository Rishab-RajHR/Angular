import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sub',
  imports: [],
  templateUrl: './sub.html',
  styleUrl: './sub.css',
})
export class Sub {
   @Output() messageEvent = new EventEmitter<string>();

   sendMessage(value: string){
       this.messageEvent.emit(value);
   }
}
