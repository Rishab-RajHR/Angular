import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PutApi } from '../put-api';

@Component({
  selector: 'app-put-api-service',
  standalone: true,   // recommended if using imports array
  imports: [ReactiveFormsModule],
  templateUrl: './put-api-service.html',
  styleUrl: './put-api-service.css',
})
export class PutApiService {

  userForm: FormGroup;
  response: string | null = null;

  constructor(private fb: FormBuilder, private userService: PutApi) {
    this.userForm = this.fb.group({
      id: [null, Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const { id, name, email } = this.userForm.value;

      this.userService.updateUser(id, { name, email }).subscribe({
        next: () => {
          this.response = 'User updated successfully!';
          this.userForm.reset();
        },
        error: () => {
          this.response = 'Error updating data';
        }
      });
    }
  }
}
