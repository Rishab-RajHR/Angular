import { Component } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  imports: [],
  templateUrl: './for-directive.html',
  styleUrl: './for-directive.css',
})
export class ForDirective {
    users: any[] = [
      {id: 110, name: "Alex"},
      {id: 220, name: "Tovino"},
      {id: 330, name: "Basil"},
      {id: 440, name: "Naveen"},
    ]
}
