import { ProductCategoryName } from "../Enums/productCategoryName";

export class Product{
  modelNumber:string;
  productName:string;
  dateOfPurchase: string;
  category:ProductCategoryName;
 
  warrentyYears:number;
  warrantyDate:string;

  constructor(modelNumber:string, productName:string,  category:any, dateOfPurchase: string, warrentyYears :number,  warrantyDate: string) {
    this.modelNumber = modelNumber;
    this.productName = productName;
    this.dateOfPurchase = dateOfPurchase;
    this.category=category;
    
    this.warrentyYears = warrentyYears;
    this.warrantyDate = warrantyDate;
}
}