import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css',
})
export class EventBinding {
    buttonMessage: string = '';
    inputMessage: string = '';

    onButtonClick(){
       this.buttonMessage = 'Button Clicked';
    }

    onInputChange(event: any){
       this.inputMessage = `You typed: ${event.target.value}`
    }
}
