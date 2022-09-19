import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
  },
  {
    path: 'forget-password-update/:userId/:token',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then(m => m.ResetPasswordModule)
  },
  {
    path: 'instructor',
    loadChildren: () => import('./instructors/create-course/create-course.module').then(m => m.CreateCourseModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'contactus',
    loadChildren: () => import('./pages/contactus/contactus.module').then(m => m.ContactusModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./pages/aboutus/aboutus.module').then(m => m.AboutusModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'category-admin',
    loadChildren: () => import('./components/category-admin/category-admin.module').then(m => m.CategoryAdminModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'subcategory-admin',
    loadChildren: () => import('./components/subcategory-admin/subcategory-admin.module').then(m => m.SubcategoryAdminModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'user-admin',
    loadChildren: () => import('./components/user-admin/user-admin.module').then(m => m.UserAdminModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'instructor-admin',
    loadChildren: () => import('./components/instructor-admin/instructor-admin.module').then(m => m.InstructorAdminModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'course-admin',
    loadChildren: () => import('./components/course-admin/course-admin.module').then(m => m.CourseAdminModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'userprofile',
    loadChildren: () => import('./pages/userprofile/userprofile.module').then(m=> m.UserprofileModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'userpasswordchange',
    loadChildren: () => import('./pages/user-password-change/user-password-change.module').then(m=> m.UserPasswordChangeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'usercourses',
    loadChildren: () => import('./pages/user-courses/user-courses.module').then(m=> m.UserCoursesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then(m=> m.CartModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'category-list',
    loadChildren: () => import('./pages/category-list/category-list.module').then(m => m.CategoryListModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
