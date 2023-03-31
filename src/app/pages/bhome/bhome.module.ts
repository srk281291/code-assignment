import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionRoutingModule } from './bhom.routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { TransactionComponent } from './transaction/transaction.component';
import { TranasctionFormComponent } from './transaction/tranasction-form/tranasction-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionListComponent } from './transaction/transaction-list/transaction-list.component';
import { featureKey, transactionReducer } from './store/transaction.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TransactionEffects } from './store/transaction.effects';
@NgModule({
  declarations: [
    TransactionComponent,
    TranasctionFormComponent,
    TransactionListComponent,
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature(featureKey, transactionReducer),
    EffectsModule.forFeature(TransactionEffects),
  ],
})
export class BhomeModule {}
