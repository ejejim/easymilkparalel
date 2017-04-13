import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CowsRoutingModule } from './cows-routing.module';
import { CowListComponent } from './cow-list/cow-list.component';
import { CowCreateComponent } from './cow-create/cow-create.component';

@NgModule({
  imports: [
    CommonModule,
    CowsRoutingModule
  ],
  declarations: [CowListComponent, CowCreateComponent]
})
export class CowsModule { }
