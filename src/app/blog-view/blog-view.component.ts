import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute,Router} from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  public allBlogs;
  public currentBlog;
  constructor(private location:Location,private _route:ActivatedRoute, private router:Router,private httpService:HttpServiceService){}


  ngOnInit() {
    console.log("on is called");
    let myBlogId = this._route.snapshot.paramMap.get('id');
    console.log(myBlogId)

    this.httpService.getsingle(myBlogId).subscribe(
      data=>{
        console.log(data)
        this.currentBlog=data['data']
        
      },
      error=>{
        console.log('error')
        console.log(error.errorMessage)
      }
    )
  }
  public goBack(){
    this.location.back();
  }
  public deleteblog():any{
    this.httpService.delete(this.currentBlog.blogId).subscribe(
      data=>{
        console.log(data)
        setTimeout(()=>{
          this.router.navigate(['/home'])
           },3000 )
        
      },
      error=>{
        console.log('error')
        console.log(error.errorMessage)
      }
    )
  }

}
