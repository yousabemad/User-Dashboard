import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { UserIdComponent } from './component/user-id/user-id.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: "user-Id", component: UserIdComponent},
];
