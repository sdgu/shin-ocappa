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

  private headers = new Headers({'Content-Type': 'application/json'});

  getStories(): Observable<Story[]>
  {
  	return this.http.get(this.storyUrl)
  	.map(res => res.json());
  }

  create(title: string, desc: string, password: string): Promise<Story>
  {
  	return this.http
  		   .post(this.storyUrl, JSON.stringify({title: title, desc: desc, pass: password}),
  		   	{headers: this.headers})
  		   .toPromise()
  		   .then(res => res.json().data as Story)
  		   .catch(this.handleError);
  }

  update(story: Story): Promise<Story>
  {
  	let url = `${this.storyUrl}/${story._id}`;
  	// alert(url);
  	return this.http
  		   .put(url, JSON.stringify(story), {headers: this.headers})
  		   .toPromise()
  		   .then(() => story)
  		   .catch(this.handleError);
  }

	private handleError(error: any): Promise<any>
	{
		console.error("error", error);
		return Promise.reject(error.message || error);
	}
  // Math.floor((Math.random() * 10) + 1); 

  // getRandomStory(title: string): Promise<Story>
  // {
  // 	return this.getStories.then(stories =>
  // 	{
  // 		stories.find(story => story.title === title)
  // 	})
  // }

}
