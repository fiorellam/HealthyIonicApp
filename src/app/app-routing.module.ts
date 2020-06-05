import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuarioGuard } from './guards/usuario.guard';

const routes: Routes = [
  { 
    path: 'main', 
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
    canLoad: [UsuarioGuard]
     },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule) },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main/tabs/tab2'
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'user-recipes',
    loadChildren: () => import('./pages/user-recipes/user-recipes.module').then( m => m.UserRecipesPageModule)
  },
  // {
  //   path: 'tab4',
  //   loadChildren: () => import('./pages/tab4/tab4.module').then( m => m.Tab4PageModule)
  // },
  // {
  //   path: 'new',
  //   loadChildren: () => import('./pages/new/new.module').then( m => m.NewPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
