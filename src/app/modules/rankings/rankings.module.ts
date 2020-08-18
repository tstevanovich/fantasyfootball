import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { RankingsHomeComponent } from './pages/rankings-home/rankings-home.component';
import { RankingsRoutingModule } from './rankings-routing.module';

@NgModule({
  declarations: [RankingsHomeComponent],
  imports: [CommonModule, RankingsRoutingModule, SharedModule]
})
export class RankingsModule {}
