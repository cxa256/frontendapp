import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCategoryName } from 'src/app/Enums/productCategoryName';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  modelNumber:string='';
  productName:string='';
  msgClass:string='';
  message:string=''
  warrentyYears: number=0;
  dateOfPurchase = ''
  warrantyDate = ''
 category: ProductCategoryName = 0;
 product:Product=new Product(this.modelNumber,this.productName,this.category,this.dateOfPurchase,this.warrentyYears,this.warrantyDate);
  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(){
    console.log(this.modelNumber)
    this.productService.updateProductWarranty(this.modelNumber, this.warrentyYears).subscribe( 
      {
        next:
      data=>{ console.log(data);
        this.msgClass='alert alert-success'
        this.message="success"
      },
    
    
    error: e => {console.log(e)
      this.msgClass='alert alert-danger'
      this.message="fail"
    },
    complete: () => { }
      }
    );
    
  }

  goToProductList(){
    this.router.navigate(['/allproducts']);
  }
}
