import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoriesComponent }      from './stories/stories.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SubmissionComponent } from "./submission/submission.component";


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'stories',     component: StoriesComponent },
  { path: "submission", component: SubmissionComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}