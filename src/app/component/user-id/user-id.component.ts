import { Component,  } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserId } from '../../../types';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-user-id',
  standalone: true,
  imports: [CardModule],
  templateUrl: './user-id.component.html',
  styleUrl: './user-id.component.scss'
})
export class UserIdComponent {
constructor(
  private usresService: UsersService,

){}
user:UserId= this.usresService.userID;
}
