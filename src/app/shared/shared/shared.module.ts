import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/common/layout/header/header.component';
import { BbUIModule } from 'src/app/common/bb-ui/bb-ui.module';
import { CardComponent } from './../../common/layout/card/card.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SortByPipe } from './pipe/sort.pipe';
import { ModalComponent } from 'src/app/common/layout/modal/modal/modal.component';
import { NumberOnlyDirective } from './directive/numeric-input.directive';
import { IconHeaderComponent } from './utils/icon-header/icon-header.component';

const COMPONENTS = [HeaderComponent, CardComponent, FilterPipe, SortByPipe,NumberOnlyDirective, ModalComponent, IconHeaderComponent];
@NgModule({
  declarations: COMPONENTS,
  exports: [...COMPONENTS, BbUIModule],
  imports: [CommonModule, BbUIModule],
})

export class SharedModule {}
