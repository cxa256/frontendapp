import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-get-allproducts',
  templateUrl: './get-allproducts.component.html',
  styleUrls: ['./get-allproducts.component.css']
})
export class GetAllproductsComponent {
  products: Product[] = [];
  constructor(private productService:ProductService, private router:Router){}
  ngOnInit(): void {
    this.getProducts();
  }
  
  private getProducts(){
    this.productService.getAllProducts().subscribe(data => {
      console.log(data)
      this.products = data;

   
    });
  }

  productDetails(modelNumber: string){
    this.router.navigate(['productdetails', modelNumber]);
  }

  updateProduct(modelNumber: string){
    this.router.navigate(['updateproduct', modelNumber]);
  }

  deleteProduct(modelNumber:string){
    this.productService.deleteProduct(modelNumber).subscribe(
      (data)=>{
        console.log(data)
        this.getProducts();
      }
    )
    
 }
}