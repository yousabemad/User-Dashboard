import { Component } from '@angular/core';
import { UsersComponent } from "../users/users.component";
import { UsersService } from '../../services/users.service';
import { Users } from '../../../types';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [UsersComponent]
})
export class HomeComponent {

    constructor(
        private usresService : UsersService
    ){}

    ngOnInit(): void {
        this.usresService.getUsers("https://reqres.in/api/users", { page: 1, perPage: 5 })
            .subscribe(
                (users: Users) => {
                    if (users && users.items) {
                        console.log(users.items);
                        console.log(users.page);
                        console.log(users.perPage);
                        console.log(users.total);
                        console.log(users.totalPages);
                    } else {
                        console.error("Users or items are undefined.");
                    }
                },
                (error) => {
                    console.error("Error fetching users:", error);
                }
            );
    }

}
