import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCategoryName } from 'src/app/Enums/productCategoryName';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.css']
})
export class PostProductComponent {
  modelNumber:string=""
  productName:string=''
  warrantyDate:string=new Date().toISOString().slice(0, 10);
 category: string ='' ;
 msgClass:string='';
 message:string=''
 warrentyYears: number=0;
dateOfPurchase:string=''

 dop= new Date().toISOString().slice(0, 10);
productCat:string[]=[ProductCategoryName[ProductCategoryName.WashingMachine],ProductCategoryName[ProductCategoryName.TV],ProductCategoryName[ProductCategoryName.AC],ProductCategoryName[ProductCategoryName.MobilePhone]]
 product:Product=new Product(this.modelNumber,this.productName,this.category,this.dateOfPurchase,this.warrentyYears,this.warrantyDate);
 
  constructor(private productService: ProductService,
    private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  saveProduct(){
    this.productService.addProduct(this.product).subscribe( {
      next:
    data=>{ console.log(data);
      this.msgClass='alert alert-success'
      this.message="product created successfully"
    },
  
  
  error: e => {console.log(e)
    this.msgClass='alert alert-danger'
    this.message="Please enter correct details!"
  },
  complete: () => { }
    }
    );
  }

  goToProductList(){
    this.router.navigate(['']);
  }
  
  onSubmit(){
    console.log(this.product);
    this.saveProduct();
  }

}

