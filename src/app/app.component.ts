import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TemplateFrom';
  default="Angular";
  gender:any=[  { id:1,val:"Male" },{ id:2,val:"Female" } ]

  /* Acess Element using @ViewChild  */
  /*@ViewChild('form') myForm:NgForm;
  onSubmit(){
    console.log(this.myForm);
  }*/

  onSubmit(form:NgForm){
    // console.log(form.value);
    console.log(form.value);
  }
}
