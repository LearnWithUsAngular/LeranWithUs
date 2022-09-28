import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CourseResolver } from './resolvers/course.resolver';

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
    loadChildren: () => import('./pages/instructor-list/instructor-list.module').then(m => m.InstructorListModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'create-instructor',
    loadChildren: () => import('./pages/crud-instructor/crud-instructor.module').then(m => m.CrudInstructorModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-instructor/:id',
    loadChildren: () => import('./pages/crud-instructor/crud-instructor.module').then(m => m.CrudInstructorModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'create-course',
    loadChildren: () => import('./pages/create-course/create-course.module').then(m => m.CreateCourseModule),
    canActivate: [AuthGuard],

  },
  {
    path: 'edit-course/:id',
    loadChildren: () => import('./pages/create-course/create-course.module').then(m => m.CreateCourseModule),
    canActivate: [AuthGuard],
    resolve: { course: CourseResolver }
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
    canActivate: [AuthGuard],

  },
  {
    path: 'user-profile/:id',
    loadChildren: () => import('./pages/userprofile/userprofile.module').then(m => m.UserprofileModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'user-password-change/:id',
    loadChildren: () => import('./pages/user-password-change/user-password-change.module').then(m => m.UserPasswordChangeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'user-courses',
    loadChildren: () => import('./pages/user-courses/user-courses.module').then(m => m.UserCoursesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'category-list',
    loadChildren: () => import('./pages/category-list/category-list.module').then(m => m.CategoryListModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'create-user',
    loadChildren: () => import('./pages/create-user/create-user.module').then(m => m.CreateUserModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-user/:id',
    loadChildren: () => import('./pages/edit-user/edit-user.module').then(m => m.EditUserModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'create-category',
    loadChildren: () => import('./pages/crud-category/crud-category.module').then(m => m.CrudCategoryModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-category/:id',
    loadChildren: () => import('./pages/crud-category/crud-category.module').then(m => m.CrudCategoryModule),
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
