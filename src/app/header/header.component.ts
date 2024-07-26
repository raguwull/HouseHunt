import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  selectedOption = '';
  options = [
    {
      name: 'Buy',
      value: 'Buy',
    },
    {
      name: 'Sell',
      value: 'Sell',
    },
    {
      name: 'Rent',
      value: 'Rent',
    },
    {
      name: 'Compare',
      value: 'Compare',
    },
    {
      name: 'Notifications',
      value: 'Notifications',
    },
    {
      name: 'Inbox',
      value: 'Inbox',
    },
    {
      name: 'Filters',
      value: 'Filters',
    },
  ];
  onToggleMenu(option: string) {
    this.selectedOption = option;
    console.log(this.selectedOption);
  }
}
