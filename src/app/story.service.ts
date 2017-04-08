import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";

import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";

import { Story } from "./story";

@Injectable()
export class StoryService 
{
  private storyUrl = "api/stories";
  constructor(private http: Http) { };

  getStories(): Observable<Story[]>
  {
  	return this.http.get(this.storyUrl)
  	.map(res => res.json());
  }

}
