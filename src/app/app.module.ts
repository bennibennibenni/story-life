import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgHttpLoaderModule } from 'ng-http-loader';

import { HeaderModule } from './layout/header/header.module';
import { FooterModule } from './layout/footer/footer.module';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserComponent } from './pages/user/user.component';
import { TagComponent } from './pages/tag/tag.component';
import { PostComponent } from './pages/post/post.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UserPostComponent } from './pages/user-post/user-post.component';
import { PostCommentComponent } from './pages/post-comment/post-comment.component';
import { TagPostComponent } from './pages/tag-post/tag-post.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    UserComponent,
    TagComponent,
    PostComponent,
    UserDetailComponent,
    UserPostComponent,
    PostCommentComponent,
    TagPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HeaderModule,
    FooterModule,
    NgHttpLoaderModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
