import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $('.menu-toggle').click(function(){
        $(".nav").toggleClass("mobile-nav");
        $(this).toggleClass("is-active");
     });
    });
  }

}
