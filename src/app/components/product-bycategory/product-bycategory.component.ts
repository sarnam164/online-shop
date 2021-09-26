import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from './../../services/product.service';
import { Product } from './../../product';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-bycategory',
  templateUrl: './product-bycategory.component.html',
  styleUrls: ['./product-bycategory.component.css']
})
export class ProductBycategoryComponent implements OnInit {

  categoryname: string;

  products:Product[] = [];
  dataSource;
  displayedColumns: string[] = ['productID', 'productCategory', 'productName', 'productDescription', 'units', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private productService:ProductService, private router:Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  getProducts(){
    this.productService.getProductByCategory(this.categoryname).subscribe(
      data=>{
        this.products = data;
        console.log(data);
        this.dataSource = new MatTableDataSource<Product>(this.products);
        this.dataSource.paginator = this.paginator;
        if(data.length==0){
          let snackBarRef = this.snackBar.open('No Records Found', 'Close');
        }
      });
  }

  onSubmit(){
    this.getProducts();
  }

  private updateProduct(productId:number){
    console.log(productId);
    this.router.navigate(['/updateProduct', productId]);
  }

  private deleteProduct(productId:number){
    console.log(productId);
    this.productService.deleteProduct(productId).subscribe(
      data=>{
        console.log(data);
        this.getProducts();
      },
      error=>{
        console.log(error);
      }
    )
  }

}