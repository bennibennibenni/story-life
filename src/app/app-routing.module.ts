import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserPostComponent } from './user-post/user-post.component';
import { PostCommentComponent } from './post-comment/post-comment.component';
import { TagPostComponent } from './tag-post/tag-post.component';
import { PostComponent } from './post/post.component';
import { TagComponent } from './tag/tag.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
