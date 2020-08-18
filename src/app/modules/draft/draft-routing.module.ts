import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DraftHomeComponent } from './pages/draft-home/draft-home.component';

const routes: Routes = [{ path: '', component: DraftHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DraftRoutingModule {}
