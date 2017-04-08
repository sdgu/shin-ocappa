import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { StoriesComponent } from './stories/stories.component';
import { DashboardComponent } from "./dashboard/dashboard.component";

import { AppRoutingModule } from "./app-routing.module";

import { StoryService } from "./story.service";

@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [StoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
