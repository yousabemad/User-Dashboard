import { Component } from '@angular/core';
import { UsersComponent } from "../users/users.component";
import { UsersService } from '../../services/users.service';
import { User, UserId, Users } from '../../../types';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { Router } from '@angular/router';
import { UserIdComponent } from "../user-id/user-id.component";
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [UsersComponent, CommonModule, PaginatorModule, UserIdComponent]
})
export class HomeComponent {
    constructor(
        private usresService: UsersService,
        private router: Router,
    ) { }

    users: User[] = [];
    userId!: UserId;

    totalRecords: number = 0;
    rows: number = 2;

    onPageChange(event: any) {
        this.fetchUsers(event.first, event.rows)
    }

    fetchUsers(page: number, perPage: number) {
        this.usresService.getUsers("https://reqres.in/api/users", { page, perPage })
            .subscribe(
                (users: Users) => {
                    this.users = users.data;
                    this.totalRecords = users.total
                },
                (error) => {
                    console.error("Error fetching users:", error);
                }
            );
    }

    fetchUserId(id: number) {

        this.usresService.getUserById("https://reqres.in/api/users", { id })
            .subscribe(
                (user: UserId) => {
                    this.userId = user;
                    console.log(this.userId.data.first_name);

                    console.log(this.userId.support.text);

                    console.log(id);
                    this.usresService.userID=user;
                    this.router.navigate(['/user-Id']);


                }, (error) => {
                    console.error("Error fetching users:", error);
                }
            )
    }
    ngOnInit(): void {
        this.fetchUsers(0, this.rows)

    }


}
