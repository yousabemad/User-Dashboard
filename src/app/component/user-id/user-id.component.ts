import { Component,  } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserId } from '../../../types';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-id',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.scss']
})
export class UserIdComponent {
home() {
  this.router.navigate(['/']);
}
constructor(
  private usresService: UsersService,
  private router: Router,

){}
user:UserId= this.usresService.userID;
}
