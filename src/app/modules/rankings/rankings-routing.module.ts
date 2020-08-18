import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RankingsHomeComponent } from './pages/rankings-home/rankings-home.component';

const routes: Routes = [{ path: '', component: RankingsHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankingsRoutingModule {}
