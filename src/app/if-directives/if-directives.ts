import { Component } from '@angular/core';

@Component({
  selector: 'app-if-directives',
  imports: [],
  templateUrl: './if-directives.html',
  styleUrl: './if-directives.css',
})
export class IfDirectives {
    isLoggedIn = true;
    isAdmin = false;
}
