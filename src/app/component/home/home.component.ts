import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UsersComponent } from "../users/users.component";
import { UsersService } from '../../services/users.service';
import { User, UserId, Users } from '../../../types';
import { CommonModule } from '@angular/common';
// import { PaginatorModule } from 'primeng/paginator';
import { Router } from '@angular/router';
import { UserIdComponent } from "../user-id/user-id.component";
import { HeaderComponent } from '../header/header.component';
import { SearchService } from '../../services/search.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [UsersComponent, CommonModule, UserIdComponent, HeaderComponent, MatPaginatorModule,MatProgressSpinnerModule]
})
export class HomeComponent implements OnInit {
    users: User[] = [];
    userId!: UserId;
    totalRecords: number = 0;
    rows: number = 6;
    pageIndex: number = 0;  // Current page index
    search: string = this.searchService.searchID;
    loading:boolean=false;
    constructor(
        private usersService: UsersService,
        private router: Router,
        private searchService: SearchService
    ) { }

    ngOnInit(): void {
        this.fetchUsers(1, this.rows);

        // Subscribe to changes in the searchID property
        this.searchService.searchIDChanged.subscribe((searchID: string) => {
            this.onSearch(searchID);
        });
    }

    onPageChange(event: PageEvent): void {
        this.pageIndex = event.pageIndex;
        this.rows = event.pageSize;
        this.fetchUsers(event.pageIndex + 1, event.pageSize);
    }

    fetchUsers(page: number, perPage: number): void {
        this.loading = true;
        this.usersService.getUsers("https://reqres.in/api/users", { page, perPage })
            .subscribe(
                (response: Users) => {
                    this.users = response.data;
                    this.totalRecords = response.total;
                    this.loading = false;

                },
                (error) => {
                    console.error("Error fetching users:", error);
                    this.loading = false;

                }
            );
    }

    fetchUserId(id: number): void {
        this.loading = true;

        this.usersService.getUserById("https://reqres.in/api/users", { id })
            .subscribe(
                (user: UserId) => {
                    this.userId = user;
                    this.usersService.userID = user;
                    this.router.navigate(['/user-Id']);
                    this.loading = false;

                },
                (error) => {
                    console.error("Error fetching users:", error);
                    this.loading = false;

                }
            );
    }

    onSearch(searchId: string): void {
        if (searchId === "") {
            this.router.navigate(['']);
        }
        this.fetchUserId(+searchId);
    }
}

