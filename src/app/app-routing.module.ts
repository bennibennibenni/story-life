import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './pages/user/user.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UserPostComponent } from './pages/user-post/user-post.component';
import { PostCommentComponent } from './pages/post-comment/post-comment.component';
import { TagPostComponent } from './pages/tag-post/tag-post.component';
import { PostComponent } from './pages/post/post.component';
import { TagComponent } from './pages/tag/tag.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'user', component: UserComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'post/:id', component: UserPostComponent },
  { path: 'post', component: PostComponent },
  { path: 'post/:postId/comment', component: PostCommentComponent },
  { path: 'tag/:tagId/post', component: TagPostComponent },
  { path: 'tag', component: TagComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
  })]
  ,
  exports: [RouterModule],
})
export class AppRoutingModule {
}
