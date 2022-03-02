import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
  this.angForm = this.fb.group({
  comment: ['', Validators.required]
  });
  }

  comment = "";
  postComment = [];

  ngOnInit(): void {
    this.dataService.getComment().subscribe(
      (data) => {
        console.log("comments: ", data);
        
        this.postComment = data.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  post(angForm1:NgForm)
  
{
  console.log(angForm1.value);
  console.log(this.comment);
  
this.dataService.comment(this.comment).subscribe((data) => {
console.log('returned data: ', data);

}, (error) => {
  console.log('returned data: ', error);
})
}
//get comment() { return this.angForm.get('comment'); }





}
