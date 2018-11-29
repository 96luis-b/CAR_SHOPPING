import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommentProductPage } from './comment-product';

@NgModule({
  declarations: [
    CommentProductPage,
  ],
  imports: [
    IonicPageModule.forChild(CommentProductPage),
  ],
})
export class CommentProductPageModule {}
