import { Component, OnInit } from '@angular/core';
import { DeleteService } from '../delete-service';

@Component({
  selector: 'app-delete-api-service',
  templateUrl: './delete-api-service.html',
  styleUrls: ['./delete-api-service.css'] // ✅ fixed
})
export class DeleteApiService implements OnInit {

  users: any[] = [];
  response: string | null = null;

  constructor(private deleteService: DeleteService) {} // ✅ constructor closed properly

  ngOnInit(): void {   // ✅ now outside constructor
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.deleteService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: () => {
        this.response = 'Error Fetching Users Data';
      }
    });
  }

  deleteUser(userId: number): void {
    this.deleteService.deleteUser(userId).subscribe({
      next: () => {
        this.response = 'User deleted successfully!';
        this.users = this.users.filter(user => user.id !== userId);
      },
      error: () => {
        this.response = 'Error Deleting Data';
      }
    });
  }
}
