import { Component, ViewEncapsulation } from '@angular/core';
import { EncapsulationSecond } from '../encapsulation-second/encapsulation-second';

@Component({
  selector: 'app-encapsulation-first',
  imports: [EncapsulationSecond],
  templateUrl: './encapsulation-first.html',
  styleUrl: './encapsulation-first.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class EncapsulationFirst {

}
