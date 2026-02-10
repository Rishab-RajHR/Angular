import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HostListenerExample } from './host-listener-example/host-listener-example';
import { PreserverWhitespaceExample } from './preserver-whitespace-example/preserver-whitespace-example';
import { EncapsulationFirst } from './encapsulation-first/encapsulation-first';
import { EncapsulationSecond } from './encapsulation-second/encapsulation-second';
import { Parent } from './parent/parent';
import { Super } from "./super/super";
import { IfDirectives } from './if-directives/if-directives';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HostListenerExample, PreserverWhitespaceExample, EncapsulationFirst, Parent, Super, IfDirectives],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None
})
export class App {
  protected readonly title = signal('my-angular');
}
