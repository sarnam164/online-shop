import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Product } from './../../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId:string;
  product:Product={productID:null,productCategory:null,productName:null,productDescription:null,units:null};

  constructor(private productService:ProductService, private router:Router, private route:ActivatedRoute, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['productId']
    this.productService.getProductById(this.productId).subscribe(
      data=>{
        this.product=data;
      },
      error=>{
        console.log(error);
        let snackBarRef = this.snackbar.open("Unable to Fetch Product Details","Close");
      });
  }

  updateProduct(){
    this.productService.updateProduct(this.productId, this.product).subscribe(
      data=>{
        console.log(data);
        this.goToProductList();
      },
      error=>{
        console.log(error);
        let snackBarRef = this.snackbar.open("Failed to Update Product Details","Close");
      });
  }

  goToProductList(){
    this.router.navigate(['/productlist']);
  }

  onSubmit(){
    console.log(this.product);
    this.updateProduct();
  }

}
