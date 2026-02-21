import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',  // Singleton
})
export class Logger {
   log(message: string): void{
      console.log(`[LOG]: ${message}`);
   }
   error(message: string): void{
      console.log(`[ERROR]: $[message]`);
   }
   warn(message: string): void{
     console.log(`[WARN]: ${message}`);
   }
}
