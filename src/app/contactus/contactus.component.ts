import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  formData = {
    user_name: "",
    user_email:"",
    message: "",
  }


  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_zniwkhe', 'template_4vxb7fe', e.target as HTMLFormElement, 'user_YGWhHtlgLosZscpntuuGL')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
  
  constructor() { }

  ngOnInit(): void {
  }

 // resetForm(){
  //  this.registerform.reset();
 // }
 addPost(form: NgForm){

  form.reset(); 
}

validate(ngFr: NgForm) {
 console.log('is user name valid ', ngFr.controls.user_name.status);
}




}