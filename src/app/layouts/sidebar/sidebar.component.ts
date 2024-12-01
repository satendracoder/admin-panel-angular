import { Component } from '@angular/core';
import { MateriallistModule } from '../../shared/materiallist/materiallist.module';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-sidebar',
  imports: [MateriallistModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations: [
    trigger('dropdownAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('300ms ease-out', style({ height: '*', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ height: 0, opacity: 0 })),
      ]),
    ]),
  ],
})
export class SidebarComponent {
  isOpen: { [key: string]: boolean } = {}; // Tracks dropdown open states
   activeMenu: string = ''; // Tracks active main menu
  activeSubmenu: string = ''; // Tracks active submenu

  toggleDropdown(menu: string): void {
    // Close all other dropdowns
  Object.keys(this.isOpen).forEach((key) => {
    if (key !== menu) {
      this.isOpen[key] = false;
    }
  });

  // Toggle the clicked dropdown
  this.isOpen[menu] = !this.isOpen[menu];
  this.setActiveMenu(menu); // Set active menu on toggle
  }

   setActiveMenu(menu: string): void {
    this.activeMenu = menu;
    this.activeSubmenu = ''; // Reset submenu when changing menu
  }

  setActiveSubmenu(submenu: string): void {
    this.activeSubmenu = submenu;
  }

  toggleProfileMenu(): void {
    alert('Profile menu clicked!');
  }
}
