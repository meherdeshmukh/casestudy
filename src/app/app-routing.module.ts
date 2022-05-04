import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'floating-banner',
    loadChildren: () =>
      import('./floating-banner/floating-banner.module').then(
        (m) => m.FloatingBannerModule
      ),
  },
  {
    path: 'timer-IO',
    loadChildren: () =>
      import('./timerwith-io/timerwith-io.module').then(
        (m) => m.TimerwithIOModule
      ),
  },
  {
    path: 'timer-services',
    loadChildren: () =>
      import('./timerwith-service/timerwith-service.module').then(
        (m) => m.TimerwithServiceModule
      ),
  },
  {
    path: 'dynamic-div',
    loadChildren: () =>
      import('./dynamic-divs/dynamic-divs.module').then(
        (m) => m.DynamicDivsModule
      ),
  },
  {
    path: 'table',
    loadChildren: () =>
      import('./table-sortable/table-sortable.module').then(
        (m) => m.TableSortableModule
      ),
  },
  {
    path: 'ecommerce',
    loadChildren: () =>
      import('./ecommerce/ecommerce.module').then((m) => m.EcommerceModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
