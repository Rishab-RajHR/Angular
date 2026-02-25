import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { PostApi } from '../post-api';

@Component({
  selector: 'app-post-api-service',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './post-api-service.html',
  styleUrl: './post-api-service.css',
})
export class PostApiService {
     userForm: FormGroup;

     response: string | null = null;

     constructor(private fb: FormBuilder, private userService: PostApi){
         this.userForm = this.fb.group({
             name: this.fb.nonNullable.control('', Validators.required),
             email: this.fb.nonNullable.control('',[Validators.required, Validators.email])
         })
     }

     onSubmit(){
        if(this.userForm.valid){
           const user = this.userForm.value as { name: string; email: string};
           this.userService.addUser(user).subscribe({
               next: () => {
                  this.response = 'User added successfully!';
                  this.userForm.reset();
               },
               error: (err) => {
                   this.response = 'Error adding user: ' + err.message;
               }
           })
        }
     }
}
