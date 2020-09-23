import { Component, OnInit } from '@angular/core';
import {SKILLS} from '../mock-skills';
import { Skills } from '../skills';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  skills: Skills[];

  constructor() { }

  ngOnInit(): void {
  }

}
