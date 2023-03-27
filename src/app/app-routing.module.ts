import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'bhome',
    loadChildren: () =>
      import('../app/pages/bhome/bhome.module').then((m) => m.BhomeModule),
  },
  { path: '', redirectTo: 'bhome', pathMatch: 'full' },
  { path: '**', redirectTo: 'bhome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
