import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
import 'jquery-mask-plugin';
import axios from 'axios';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function () {
      let SPMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
      },
      spOptions = {
        onKeyPress: function(val, e, field, options) {
            field.mask(SPMaskBehavior.apply({}, arguments), options);
          }
      };
      
      $('#telephone').mask(SPMaskBehavior, spOptions);
      $("#submit").click(function (e) {
        e.preventDefault();
        const body = {
          name: $("#name").val(),
          email: $("#email").val(),
          telephone: $("#telephone").val(),
          subject: $("subject").val(),
          message: $("#message").val()
        }
        console.log(body);
        axios.post("https://nodemailer-portifolio.herokuapp.com/sendemail", {
          name: $("#name").val(),
          email: $("#email").val(),
          telephone: $("#telephone").val(),
          subject: $("#subject").val(),
          message: $("#message").val()
        }).then((response) => {
          alert("Enviado com sucesso!");        
        window.onload = function(){
          setTimeout("location.reload(true);", 3000);
        }
        }).catch((error) => {
          alert("Ocorreu um erro!")
        });
      });
      $("#github").click(function () {
        window.open("https://github.com/BlackWidow29");
      });
      $("#linkedin").click(function () {
        window.open("https://www.linkedin.com/in/isabelly-dias-faustino-0039a5156/");
      })
    });
  }

}
