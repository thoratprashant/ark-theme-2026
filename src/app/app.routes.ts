import { Routes } from '@angular/router';  

export const routes: Routes = [
//   {
//     path: 'auth',
//     component: AuthLayoutComponent,
//     loadChildren: () =>
//       import('./features/auth/auth.routes').then((mod) => mod.AUTH_ROUTES),
//   },

  {
    path: 'auth',
    loadComponent: () => import('./layouts/auth-layout/auth-layout.component').then(c => c.AuthLayoutComponent),
    loadChildren: () =>  import('./features/auth/auth.routes').then(r => r.AUTH_ROUTES),
  },

];
