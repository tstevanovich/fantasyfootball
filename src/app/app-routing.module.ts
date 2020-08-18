import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { RankingsHomeComponent } from './modules/rankings/pages/rankings-home/rankings-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/rankings', pathMatch: 'full' },
  { path: 'rankings', component: RankingsHomeComponent },
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
