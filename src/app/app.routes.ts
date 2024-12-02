import { Routes } from '@angular/router';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { authGuard } from './core/guards/authentication/auth.guard';

export const routes: Routes = [
    { path: '', component: LoginPageComponent },
    
    {
        path: 'dashboard',
          canActivate: [authGuard],
        loadComponent: () =>
            import('./layouts/tutorial-layout/tutorial-layout.component')
                .then((D) => D.TutorialLayoutComponent),
        children: [
            {
                path: 'overview',
                loadComponent: () =>
                import('./pages/dashboard/overview-dashboard/overview-dashboard.component')
                    .then((Over) => Over.OverviewDashboardComponent)
            },
            {
                path: 'instructor',
                loadComponent: () =>
                import('./pages/dashboard/instructor-dashboard/instructor-dashboard.component')
                    .then((instructor) => instructor.InstructorDashboardComponent)
            },
            {
                path: 'student',
                loadComponent: () =>
                import('./pages/dashboard/student-dashboard/student-dashboard.component')
                    .then((student) => student.StudentDashboardComponent)
            }
        ]
    }
];
