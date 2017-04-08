import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Story } from "../story";

import { StoryService } from "../story.service";


@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
  providers: [StoryService]
})
export class StoriesComponent implements OnInit 
{

  title = "Stories";
  
  stories: Story[];

  mode = "Observable";

  selectedStory: Story;
  selectedStoryEditor: Story;

  titleToAdd: string;

  constructor(private storyService: StoryService) { }

  getStories()
  {
  	this.storyService.getStories()
  	.subscribe(stories =>
  	{
  		this.stories = stories;
  	})
  	// this.stories = [{title: "pastaman origins", desc: "creation"}]
  }

  onSelect(story: Story): void
  {
  	this.selectedStory = story;
  }
  
  // addStory(): void
  // {
  // 	alert(this.titleToAdd);
  // }

  editStory(story): void
  {
  	
  	this.selectedStory = story;
  	this.selectedStoryEditor = story;
  }

  updateStory(story): void
  {
  	this.selectedStoryEditor = 
  	{
  		title: "",
  		desc: "",
  		_id: ""
  	}

  	this.storyService.update(story)
				  	 .then(() => 
				  	 {

				  	 })
  }

  ngOnInit() 
  {
  	this.getStories();
  }

}
