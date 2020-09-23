import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $("#github").click(function(){
        window.open("https://github.com/BlackWidow29");
      });
      $("#linkedin").click(function(){
        window.open("https://www.linkedin.com/in/isabelly-dias-faustino-0039a5156/");
      })
    });
  }

}
