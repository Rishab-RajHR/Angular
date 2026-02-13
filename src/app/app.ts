import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HostListenerExample } from './host-listener-example/host-listener-example';
import { PreserverWhitespaceExample } from './preserver-whitespace-example/preserver-whitespace-example';
import { EncapsulationFirst } from './encapsulation-first/encapsulation-first';
import { EncapsulationSecond } from './encapsulation-second/encapsulation-second';
import { Parent } from './parent/parent';
import { Super } from "./super/super";
import { IfDirectives } from './if-directives/if-directives';
import { SwitchCaseDirective } from './switch-case-directive/switch-case-directive';
import { ForDirective } from './for-directive/for-directive';
import { NgClassDirective } from './ng-class-directive/ng-class-directive';
import { NgStyle } from './ng-style/ng-style';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HostListenerExample, PreserverWhitespaceExample, EncapsulationFirst, Parent, Super, IfDirectives,SwitchCaseDirective,ForDirective,NgClassDirective,NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None
})
export class App {
  protected readonly title = signal('my-angular');
}
