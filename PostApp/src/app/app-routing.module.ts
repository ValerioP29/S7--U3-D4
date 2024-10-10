import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivePostComponent } from './pages/active-post/active-post.component';
import { InactivePostComponent } from './pages/inactive-post/inactive-post.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomepageComponent } from './component/homepage/homepage.component';
const routes: Routes = [
 { path: "active-post", component: ActivePostComponent },
 { path: "inactive-post", component: InactivePostComponent },
 { path: "post-details/:id", component: DetailsComponent },
 { path: "home", component: HomepageComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
