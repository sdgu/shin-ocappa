import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Story } from "../story";




@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit 
{

  title = "Stories";
  
  stories: Story[];

  mode = "Observable";


  selectedStory: Story;

  constructor() { }

  getStories()
  {
  	this.stories = [{title: "pastaman origins", desc: "creation"}]
  }

  ngOnInit() 
  {
  	this.getStories();
  }

}
