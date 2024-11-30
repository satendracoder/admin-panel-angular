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

  toggleDropdown(menu: string): void {
    this.isOpen[menu] = !this.isOpen[menu];
  }

  toggleProfileMenu(): void {
    alert('Profile menu clicked!');
  }
}
