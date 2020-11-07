import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'animal-forms',
    loadChildren: () => import('./animal-forms/animal-forms.module').then( m => m.AnimalFormsPageModule)
  },
  {
    path: 'animal-list',
    loadChildren: () => import('./animal-list/animal-list.module').then( m => m.AnimalListPageModule)
  },
  {
    path: 'animal-guide',
    loadChildren: () => import('./animal-guide/animal-guide.module').then( m => m.AnimalGuidePageModule)
  },
  {
    path: 'legal-guide',
    loadChildren: () => import('./legal-guide/legal-guide.module').then( m => m.LegalGuidePageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
