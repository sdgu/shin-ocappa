import { Component, OnInit } from '@angular/core';

import { Story } from "../story";

import { StoryService } from "../story.service";


@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {

  title = "Submission page";

  titleToAdd: string;
  descToAdd: string;

  constructor(private storyService: StoryService) { }

  addStory(title: string, desc: string, password: string): void
  {
  	this.storyService.create(title, desc, password)
  	.then(story =>
  	{
  		alert("created the story with title " + story.title);
  	})

  }


  ngOnInit() {
  }

}
