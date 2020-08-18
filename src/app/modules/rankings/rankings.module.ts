import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { RankingsHomeComponent } from './pages/rankings-home/rankings-home.component';

@NgModule({
  declarations: [RankingsHomeComponent],
  imports: [CommonModule, SharedModule]
})
export class RankingsModule {}
