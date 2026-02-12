import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-directive',
  imports: [CommonModule],
  templateUrl: './ng-class-directive.html',
  styleUrl: './ng-class-directive.css',
})
export class NgClassDirective {
    isActive : boolean = false;

    toggleState(){
        this.isActive = !this.isActive;
    }

}
