import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, ProductCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
  ],
})
export class EcommerceModule {}
