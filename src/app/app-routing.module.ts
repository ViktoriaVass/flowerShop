import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlowerCatalogueComponent } from './flower-catalogue/flower-catalogue.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', title: 'Home - Flower Shop', component: HomeComponent },
  { path: 'home', title: 'Home - Flower Shop', component: HomeComponent },
  { path: 'flower-catalogue', title: 'Flower cataloge - Flower Shop', component: FlowerCatalogueComponent },
  { path: 'cart', title: 'Cart - Flower Shop', component: CartComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
