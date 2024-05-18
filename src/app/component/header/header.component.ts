import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, ToolbarModule,  InputTextModule , FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent  {
constructor(
 private searchService:SearchService
){}
 
  item: string = '';
  onItemChange(): void {
    this.searchService.searchID = this.item;
   console.log( this.searchService.searchID )
  }
}
