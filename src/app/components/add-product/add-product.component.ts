import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Product } from './../../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product = new Product();

  constructor(private productService:ProductService, private router:Router, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

  saveProduct(){
    this.productService.addProduct(this.product).subscribe(
      data=>{
        console.log(data);
        this.goToProductList();
      },
      error=>{
        console.log(error);
        let snackBarRef = this.snackbar.open("Failed to Add Product", "Close");
      }
    )
  }

  goToProductList(){
    this.router.navigate(['/productlist']);
  }

  onSubmit(){
    console.log(this.product);
    this.saveProduct();
  }

}
