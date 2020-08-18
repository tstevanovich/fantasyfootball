import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/rankings', pathMatch: 'full' },
  {
    path: 'rankings',
    loadChildren: () =>
      import('./modules/rankings/rankings.module').then((m) => m.RankingsModule)
  },
  {
    path: 'draft',
    loadChildren: () =>
      import('./modules/draft/draft.module').then((m) => m.DraftModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
