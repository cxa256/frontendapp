import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCategoryName } from 'src/app/Enums/productCategoryName';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  modelNumber:string=""
  productName:string=''
  dateOfPurchase:string='';
  warrantyDate:string='';
 category: ProductCategoryName = 0;
 warrentyYears: number=0;

 product:Product=new Product(this.modelNumber,this.productName,this.category,this.dateOfPurchase,this.warrentyYears,this.warrantyDate);

  constructor(private route: ActivatedRoute, private router: Router,private productService: ProductService) { }

  ngOnInit(): void {
    
  }
   onSubmit(){
    this.product = new Product(this.modelNumber,this.productName,this.category,this.dateOfPurchase,this.warrentyYears,this.warrantyDate);
    this.productService.getProduct(this.modelNumber).subscribe( data => {
      this.product  = data;
    });
  }
    
  

  
}
