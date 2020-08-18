import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { DraftRoutingModule } from './draft-routing.module';
import { DraftHomeComponent } from './pages/draft-home/draft-home.component';

@NgModule({
  declarations: [DraftHomeComponent],
  imports: [CommonModule, DraftRoutingModule, SharedModule]
})
export class DraftModule {}
