import { Component } from '@angular/core';
import { Notification } from '../notification';

@Component({
  selector: 'app-scoped-service',
  imports: [],
  templateUrl: './scoped-service.html',
  styleUrl: './scoped-service.css',
  providers: [Notification]
})
export class ScopedService {
   constructor(private notification: Notification){}

   sendNotification(){
      this.notification.addNotification('New Message Received!')
   }

   getNotifications(){
        this.notification.getNotifications();
   }
}
