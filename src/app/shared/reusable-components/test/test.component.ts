import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MateriallistModule } from '../../materiallist/materiallist.module';

@Component({
  selector: 'app-test',
  imports: [MateriallistModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
isDropdownOpen: boolean = false; // Tracks dropdown visibility
activeMenu: string = 'profile'; // Tracks active menu (Profile or Settings)

  eRef = inject(ElementRef);
  // Toggles the entire dropdown visibility
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Sets the active menu (Profile or Settings) and toggles visibility
  setActiveMenu(menu: string): void {
    this.activeMenu = this.activeMenu === menu ? '' : menu; // Toggle menu
  }

   // This will handle screen size changes and keep the sidebar open on large screens
 @HostListener('document:click', ['$event'])
 handleOutsideClick(event: Event) {
   if (!this.eRef.nativeElement.contains(event.target)) { 
     this.isDropdownOpen = false;
   }
  }

  logout() {
    alert("API Not work")
    this.isDropdownOpen = false;
  }
}