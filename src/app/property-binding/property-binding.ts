import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css',
})
export class PropertyBinding {
    buttonText: string = 'Click Me';
    imageSrc: string = 'https://via.placeholder.com/150';
    isDisabled: boolean = false;

    toggleButtonState() {
       this.isDisabled = !this.isDisabled;
    }
}
