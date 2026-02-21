import { Logger } from './../logger';
import { Component } from '@angular/core';

@Component({
  selector: 'app-injectable-service',
  imports: [],
  templateUrl: './injectable-service.html',
  styleUrl: './injectable-service.css',
})
export class InjectableService {
    constructor(private logger: Logger){}
    logMessage():void{
       this.logger.log('This is a log message');
    }
    WarnMessage():void{
       this.logger.warn('This is a warn message');
    }
    ErrorMessage():void{
       this.logger.error('This is a error message');
    }
}
