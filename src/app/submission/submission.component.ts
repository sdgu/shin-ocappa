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

  constructor() { }

  addStory(): void
  {
  	alert(this.titleToAdd + "\n" + this.descToAdd);
  }


  ngOnInit() {
  }

}
