import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BannerComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component:BannerComponent }])],
})
export class FloatingBannerModule {}
