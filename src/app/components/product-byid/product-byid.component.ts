import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from './../../product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-byid',
  templateUrl: './product-byid.component.html',
  styleUrls: ['./product-byid.component.css']
})
export class ProductByidComponent implements OnInit {

  productId:number;
  product:Product={productID:null,productCategory:null,productName:null,productDescription:null,units:null};

  constructor(private productService:ProductService, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.productService.getProductById(this.productId).subscribe(
      data=>{
        this.product=data;
      },
      error=>{
        console.log(error);
        let snackBarRef = this.snackbar.open('Record Not Present', 'Close');
      });
  }

}
