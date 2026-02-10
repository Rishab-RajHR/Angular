import { Component } from '@angular/core';
import { Sub } from "../sub/sub";

@Component({
  selector: 'app-super',
  imports: [Sub],
  templateUrl: './super.html',
  styleUrl: './super.css',
})
export class Super {
    receivedMessage: string = '';

    onMessageReceived(message: string){
      this.receivedMessage = message;
    }
}
