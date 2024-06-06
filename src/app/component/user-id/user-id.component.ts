import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserId } from '../../../types';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-id',
  standalone: true,
  imports: [CardModule, ButtonModule, CommonModule],
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.scss']
})
export class UserIdComponent implements OnInit, OnDestroy {
  user!: UserId;
  private userSubscription!: Subscription;

  constructor(
    private usresService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userSubscription = this.usresService.userID$.subscribe(userID => {
      this.user = userID;
      console.log('User ID changed:', userID); // Example logging for debugging
    });

    // If you need to set the initial value
    this.user = this.usresService.userID;
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  home(): void {
    this.router.navigate(['/']);
    // console.log(this.user);
  }
}
