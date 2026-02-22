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
import { Interpolation } from './interpolation/interpolation';
import { ErrorHandlingInterpolation } from './error-handling-interpolation/error-handling-interpolation';
import { AttributeBinding } from "./attribute-binding/attribute-binding";
import { StyleBinding } from "./style-binding/style-binding";
import { ClassBinding } from "./class-binding/class-binding";
import { PropertyBinding } from "./property-binding/property-binding";
import { EventBinding } from "./event-binding/event-binding";
import { TwoWayBinding } from "./two-way-binding/two-way-binding";
import { BuiltInPipes } from "./built-in-pipes/built-in-pipes";
import { CustomPipe } from "./custom-pipe/custom-pipe";
import { InjectableService } from "./injectable-service/injectable-service";
import { ScopedService } from "./scoped-service/scoped-service";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HostListenerExample, PreserverWhitespaceExample, EncapsulationFirst, Parent, Super, IfDirectives, SwitchCaseDirective, ForDirective, NgClassDirective, NgStyle, Interpolation, ErrorHandlingInterpolation, AttributeBinding, StyleBinding, ClassBinding, PropertyBinding, EventBinding, TwoWayBinding, BuiltInPipes, CustomPipe, InjectableService, ScopedService],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None
})
export class App {
  protected readonly title = signal('my-angular');
}
