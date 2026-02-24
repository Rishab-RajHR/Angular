import { Component, OnInit } from '@angular/core';
import { GetApi } from '../get-api';

@Component({
  selector: 'app-get-api-method',
  imports: [],
  templateUrl: './get-api-method.html',
  styleUrl: './get-api-method.css',
})
export class GetApiMethod {
     posts: any[] = [];

     constructor(private apiService: GetApi){}
     ngOnInit(){
        this.apiService.getPosts().subscribe((data) => {
            this.posts = data;
        })
     }
}
