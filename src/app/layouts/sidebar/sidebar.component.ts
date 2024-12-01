import { Component, inject, OnInit } from '@angular/core';
import { MateriallistModule } from '../../shared/materiallist/materiallist.module';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';


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
export class SidebarComponent implements OnInit{
  
  isOpen: { [key: string]: boolean } = {}; // Tracks dropdown open states
  activeMenu: string = ''; // Tracks active main menu
  activeSubmenu: string = ''; // Tracks active submenu

  router = inject(Router);

  ngOnInit(): void {
    this.toggleDropdown('dashboard', true)
  }

  toggleDropdown(menuKey: string, hasChildren: boolean): void {

  if (!hasChildren) {
    // If no children, directly set it as active menu
    this.setActiveMenu(menuKey);
    return;
  }

  // Close other dropdowns
  Object.keys(this.isOpen).forEach((key) => {
    if (key !== menuKey) {
      this.isOpen[key] = false;
    }
  });

  // Toggle current dropdown
  this.isOpen[menuKey] = !this.isOpen[menuKey];
  this.setActiveMenu(menuKey);
}

setActiveMenu(menuKey: string): void {
  this.activeMenu = menuKey;
  this.activeSubmenu = ''; // Reset active submenu
}

setActiveSubmenu(submenuKey: string): void {
  this.activeSubmenu = submenuKey;
}

  
  toggleProfileMenu(): void {
    alert('Profile menu clicked!');
  }


menuItems:any = [
  {
    //heading: 'Dashboard',
    menus: [
      {
        label: 'Dashboard',
        icon: 'dashboard',
        key: 'dashboard',
        url: '/dashboard', // URL for main menu
        children: [
          { label: 'Overview Dashboard', key: 'overview',icon:'overview', url: '/dashboard/overview' },
          { label: 'Instructor Dashboard', key: 'instructor',icon:'developer_guide',  url: '/dashboard/instructor'},
          { label: 'Student Dashboard', key: 'student',icon:'overview', url: '/dashboard/reports' },
        ],
      },
    ],
  },

  
  {
    heading: 'All-Programs',
    menus: [
      {
        label: 'Tutorials',
        icon: '📚',
        key: 'tutorial',
        children: [
          { label: 'Add Category', key: 'addcategory',icon:'add_circle', url: '/courses/basic'},
          { label: 'Create Article', key: 'createarticle',icon:'post_add', url: '/courses/basic'},
          { label: 'Articles List', key: 'articlelist',icon:'list_alt', url: '/courses/advanced'  },
        ],
      },

      {
        label: 'Quizzes',
        icon: 'quiz',
        key: 'quizzes',
        children: [
           { label: 'Add Category', key: 'addcategory',icon:'add_circle', url: '/courses/basic'},
          { label: 'Create Quiz', key: 'createarticle',icon:'post_add', url: '/courses/basic'},
          { label: 'Quizzes List', key: 'articlelist',icon:'list_alt', url: '/courses/advanced'  },
        ],
      },


      {
        label: 'Exercises',
        icon: 'bug_report',
        key: 'exercises',
        children: [
           { label: 'Add Category', key: 'addcategory',icon:'add_circle', url: '/courses/basic'},
          { label: 'Create Exercise', key: 'createarticle',icon:'post_add', url: '/courses/basic'},
          { label: 'Exercises List', key: 'articlelist',icon:'list_alt', url: '/courses/advanced'  },
        ],
      },


      { label: 'Membership', icon: '👤', key: 'membership', url: '/membership'},
      { label: 'Helpdesk', icon: '❓', key: 'helpdesk' },
      { label: 'Invoice', icon: '🧾', key: 'invoice' },
    ],
  },

  {
    heading: 'Widget',
    menus: [
      { label: 'Statistics', icon: '📈', key: 'statistics', url: '/statistics' },
      { label: 'Data', icon: '📄', key: 'data', url: '/data'},
      { label: 'Chart', icon: '📊', key: 'chart', url: 'https://google.com'},
    ],
  },

   {
    heading: 'Admin Panel',
    menus: [
      {
        label: 'Online Courses',
        icon: '📚',
        key: 'courses',
        children: [
          { label: 'Basic', key: 'basic',icon:'overview', url: '/courses/basic'},
          { label: 'Advanced', key: 'advanced',icon:'overview', url: '/courses/advanced'  },
        ],
      },
      { label: 'Membership', icon: '👤', key: 'membership', url: '/membership'},
      { label: 'Helpdesk', icon: '❓', key: 'helpdesk' },
      { label: 'Invoice', icon: '🧾', key: 'invoice' },
    ],
  },
];


navigate(menu: any): void {
    if (menu.url) {
      // Check if it's an external link
      if (menu.url.startsWith('http')) {
        window.open(menu.url, '_blank'); // Open external links in new tab
      } else {
        this.router.navigate([menu.url]); // Navigate to Angular routes
      }
    }
  }
}
