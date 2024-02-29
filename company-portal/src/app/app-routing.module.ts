import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostProductComponent } from './components/post-product/post-product.component';
import { HeaderComponent } from './components/header/header.component';
import { GetAllproductsComponent } from './components/get-allproducts/get-allproducts.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  { path: `postproduct`, component: PostProductComponent },
  { path: `header`, component: HeaderComponent },
  { path: `allproducts`, component: GetAllproductsComponent },
  { path: `productdetails`, component: ProductDetailsComponent },
  { path: `updateproduct`, component: UpdateProductComponent },
  {path: '', redirectTo: '', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
