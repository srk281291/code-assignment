import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/common/layout/header/header.component';
import { BbUIModule } from 'src/app/common/bb-ui/bb-ui.module';
import { CardComponent } from './../../common/layout/card/card.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SortByPipe } from './pipe/sort.pipe';

const COMPONENTS = [HeaderComponent, CardComponent, FilterPipe, SortByPipe];
@NgModule({
  declarations: COMPONENTS,
  exports: [...COMPONENTS, BbUIModule],
  imports: [CommonModule, BbUIModule],
})
export class SharedModule {}
