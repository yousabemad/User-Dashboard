import { Component } from '@angular/core';
import { UsersComponent } from "../users/users.component";
import { UsersService } from '../../services/users.service';
import { User, Users } from '../../../types';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [UsersComponent, CommonModule ,PaginatorModule] 
})
export class HomeComponent {

users: User[] =[];

totalRecords: number=0;
rows:number=2;
    constructor(
        private usresService : UsersService
    ){}

    onPageChange(event:any){
        this.fetchUsers(event.first ,event.rows)
    }

fetchUsers(page:number ,perPage:number){
    this.usresService.getUsers("https://reqres.in/api/users", { page, perPage })
       .subscribe(
            (users: Users) => {
               this.users = users.data;
               this.totalRecords= users.total
            },
            (error) => {
                console.error("Error fetching users:", error);
            }
        );
}

    ngOnInit(): void {
        this.fetchUsers(0,this.rows)
        
    }



}
