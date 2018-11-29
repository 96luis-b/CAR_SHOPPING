import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailProductCatalogPage } from './detail-product-catalog';

@NgModule({
  declarations: [
    DetailProductCatalogPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailProductCatalogPage),
  ],
})
export class DetailProductCatalogPageModule {}
