import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  imports: [CommonModule],
  templateUrl: './built-in-pipes.html',
  styleUrl: './built-in-pipes.css',
})
export class BuiltInPipes {
   today: Date = new Date();
   price: number = 1234.5678;
   percentage: number = 0.875;
   message: string = 'Hello, Leo';
   user = {name: 'Leo', age: 22};
   items: string[] = ['React', 'Angular', 'Vue']
}
