import { Component, OnInit } from '@angular/core';

import { Story } from "../story";
import { StoryService } from "../story.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  stories: Story[] = [];

  constructor(private storyService: StoryService) { }

  ngOnInit(): void 
  {

  	// Math.floor((Math.random() * 10) + 1); 

  	this.storyService.getStories()
  	.subscribe((stories) => 
  	{
  		// let rand = Math.floor((Math.random() * stories.length()));
  		// this.stories = [stories[rand]];

  		this.stories = [
  		{
  			title: "o.o", 
  			desc: "abc",
  			_id: "abcd"

  		}]
  	});
  }

}
