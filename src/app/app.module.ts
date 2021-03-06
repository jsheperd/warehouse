import { CartService } from './cart.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleService } from "app/article.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArticleImportComponent } from './article-import/article-import.component';
import { FileUploadModule } from 'ng2-file-upload';
import { ArticleCardComponent } from './article-card/article-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleCardComponent,
    ArticleListComponent,
    AddArticleComponent,
    CartComponent,
    DashboardComponent,
    ArticleImportComponent
    // FileDropDirective,
    // FileSelectDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FileUploadModule
  ],
  providers: [ArticleService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
