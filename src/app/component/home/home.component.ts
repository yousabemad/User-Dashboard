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
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.usresService.getUsers("https://reqres.in/api/users",{page:0,perPage:2})
    .subscribe((users: Users)=>{
        console.log(users.items);
        console.log(users.page);
        console.log(users.perPage);
        console.log(users.total);
        console.log(users.totalPages);
    //    1:32 
    })
}

}
