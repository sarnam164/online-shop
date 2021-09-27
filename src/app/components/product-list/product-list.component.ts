import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Product } from './../../product';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[] = [];
  dataSource;
  displayedColumns: string[] = ['productID', 'productCategory', 'productName', 'productDescription', 'units', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private productService:ProductService, private router:Router, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(){
    this.productService.getProductList().subscribe(
      data=>{
        this.products = data;
        console.log(data);
        this.dataSource = new MatTableDataSource<Product>(this.products);
        this.dataSource.paginator = this.paginator;
        if(data.length==0){
          let snackBarRef = this.snackbar.open('No Records present in table', 'Close');
        }
      });
  }

  private updateProduct(productId:string){
    console.log(productId);
    this.router.navigate(['/updateProduct', productId]);
  }

  private deleteProduct(productId:string){
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
