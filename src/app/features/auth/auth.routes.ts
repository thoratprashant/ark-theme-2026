import { Routes } from '@angular/router'; 

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(c => c.LoginComponent),
    data: { title: 'Login' }
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./signup/signup.component').then(c => c.SignupComponent),
  }, 
  {
    path: 'forgot-password',
    loadComponent: () => import('./forgot-password/forgot-password').then(c => c.ForgotPasswordComponent),
  },
    {
    path: 'verification-code',
    loadComponent: () => import('./verification-code/verification-code').then(c => c.VerificationCode),
  },
];
