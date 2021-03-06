import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleImportComponent } from './article-import/article-import.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'articles', component: ArticleListComponent },
  { path: 'articles/:id', component: AddArticleComponent },
  { path: 'cart', component: CartComponent },
  { path: 'article-import', component: ArticleImportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
