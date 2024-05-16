import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button'
import { User } from '../../../types';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CardModule,ButtonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
@Input() user!:User;
}
