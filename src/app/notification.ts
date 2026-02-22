
import { Injectable } from '@angular/core';

@Injectable()

export class Notification {
    private notifications: string[] = [];

    addNotification(message: string){
        this.notifications.push(message)
    }

    getNotifications(){
       return this.notifications;
    }
}
