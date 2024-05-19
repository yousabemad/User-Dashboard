import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UsersComponent } from "../users/users.component";
import { UsersService } from '../../services/users.service';
import { User, UserId, Users } from '../../../types';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { Router } from '@angular/router';
import { UserIdComponent } from "../user-id/user-id.component";
import { HeaderComponent } from '../header/header.component';
import { SearchService } from '../../services/search.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [UsersComponent, CommonModule, PaginatorModule, UserIdComponent , HeaderComponent]
})
export class HomeComponent implements OnInit  {
    constructor(
        private usresService: UsersService,
        private router: Router,
        private searchService:SearchService

    ) { }

    users: User[] = [];
    userId!: UserId;

    totalRecords: number = 0;
    rows: number = 6;
    search:string = this.searchService.searchID;
    onPageChange(event: any) {
        this.fetchUsers(event.page + 1 , event.rows)
    }

    fetchUsers(page: number, perPage: number) {
        this.usresService.getUsers("https://reqres.in/api/users", { page, perPage })
            .subscribe(
                (user: Users) => {
                    this.users = user.data;
                    this.totalRecords = user.total
                    console.log(page);
                    console.log(page);
                    
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
        this.fetchUsers(1, this.rows);
    
        // Subscribe to changes in the searchID property
        this.searchService.searchIDChanged.subscribe((searchID: string) => {
            this.onSearch(searchID);
        });
      }


        onSearch(searchId: string): void {
            console.log(searchId);
            this.fetchUserId(+searchId);
        }

}
