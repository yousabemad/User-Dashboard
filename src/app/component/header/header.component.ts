import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { RouterModule } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, ToolbarModule,  InputTextModule , FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  item: string = '';

  constructor(private searchService: SearchService) {}

  onItemChange(): void {
    this.searchService.setSearchID(this.item);
  }
}
