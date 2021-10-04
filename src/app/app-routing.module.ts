import { RegisterComponent } from './components/register/register.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ProductByidComponent } from './components/product-byid/product-byid.component';
import { ProductBycategoryComponent } from './components/product-bycategory/product-bycategory.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AuthGuard } from './services/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:'full'},
  {path:'login', component:LoginComponent, pathMatch:'full'},
  {path:'register', component:RegisterComponent,pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent, pathMatch:'full', canActivate:[AuthGuard]},
  {path:'productlist', component:ProductListComponent, pathMatch:'full', canActivate:[AuthGuard]},
  {path:'addProduct', component:AddProductComponent, pathMatch:'full', canActivate:[AuthGuard]},
  {path:'listByCategory', component:ProductBycategoryComponent, pathMatch:'full', canActivate:[AuthGuard]},
  {path:'getById', component:ProductByidComponent, pathMatch:'full', canActivate:[AuthGuard]},
  {path:'updateProduct/:productId', component:UpdateProductComponent, pathMatch:'full', canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
