import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: 'instructor-list',
    loadChildren: () => import('./pages/instructor-list/instructor-list.module').then(m => m.InstructorListModule)
  },
  {
    path: 'create-instructor',
    loadChildren: () => import('./pages/crud-instructor/crud-instructor.module').then(m => m.CrudInstructorModule)
  },
  {
    path: 'edit-instructor/:id',
    loadChildren: () => import('./pages/crud-instructor/crud-instructor.module').then(m => m.CrudInstructorModule),
  },
  {
    path: 'create-course',
    loadChildren: () => import('./pages/create-course/create-course.module').then(m => m.CreateCourseModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./pages/contactus/contactus.module').then(m => m.ContactusModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./pages/aboutus/aboutus.module').then(m => m.AboutusModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule)
  },
  {
    path: 'category-admin',
    loadChildren: () => import('./components/category-admin/category-admin.module').then(m => m.CategoryAdminModule)
  },
  {
    path: 'subcategory-admin',
    loadChildren: () => import('./components/subcategory-admin/subcategory-admin.module').then(m => m.SubcategoryAdminModule)
  },
  {
    path: 'user-admin',
    loadChildren: () => import('./components/user-admin/user-admin.module').then(m => m.UserAdminModule)
  },
  {
    path: 'instructor-admin',
    loadChildren: () => import('./components/instructor-admin/instructor-admin.module').then(m => m.InstructorAdminModule)
  },
  {
    path: 'course-admin',
    loadChildren: () => import('./components/course-admin/course-admin.module').then(m => m.CourseAdminModule)
  },
  {
    path: 'user-profile/:id',
    loadChildren: () => import('./pages/userprofile/userprofile.module').then(m=> m.UserprofileModule)
  },
  {
    path: 'user-password-change/:id',
    loadChildren: () => import('./pages/user-password-change/user-password-change.module').then(m=> m.UserPasswordChangeModule)
  },
  {
    path: 'user-courses',
    loadChildren: () => import('./pages/user-courses/user-courses.module').then(m=> m.UserCoursesModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then(m=> m.CartModule)
  },
  {
    path: 'category-list',
    loadChildren: () => import('./pages/category-list/category-list.module').then(m => m.CategoryListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
