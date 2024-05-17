import { Component, Input } from '@angular/core';
import { User } from '../../../types';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
@Input() user!:User;
}
