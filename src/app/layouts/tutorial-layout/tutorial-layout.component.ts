import { Component, HostListener } from '@angular/core';
import { MateriallistModule } from '../../shared/materiallist/materiallist.module';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { TestComponent } from "../../shared/reusable-components/test/test.component";
import { RouterOutlet } from '@angular/router';
import { SearchBoxComponent } from "../../shared/reusable-components/search-box/search-box.component";

@Component({
  selector: 'app-tutorial-layout',
  imports: [MateriallistModule, SidebarComponent, TestComponent, SearchBoxComponent],
  templateUrl: './tutorial-layout.component.html',
  styleUrl: './tutorial-layout.component.scss'
})
export class TutorialLayoutComponent {

 isSidebarOpen: boolean = false; // Initially false, sidebar will be closed on mobile.

  // Method to toggle the sidebar visibility
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen; // Toggle the open/close state of the sidebar
  }

  // This will handle screen size changes and keep the sidebar open on large screens
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth > 768) {
      this.isSidebarOpen = true; // Keep the sidebar open on large screens
    }
  }

  ngOnInit() {
    // Initial check for screen size when the component loads
    if (window.innerWidth > 768) {
      this.isSidebarOpen = true; // Keep sidebar open on large screens
    }
  }
}