import { Component } from '@angular/core';
import { ReverseStringPipe } from '../reverse-string-pipe';

@Component({
  selector: 'app-custom-pipe',
  imports: [ReverseStringPipe],
  templateUrl: './custom-pipe.html',
  styleUrl: './custom-pipe.css',
})
export class CustomPipe {

}
