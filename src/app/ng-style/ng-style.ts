import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  imports: [CommonModule],
  templateUrl: './ng-style.html',
  styleUrl: './ng-style.css',
})
export class NgStyle {
   trafficStatus : string = 'stop';

   setTrafficStatus(status: string) {
      this.trafficStatus = status;
   }
}
