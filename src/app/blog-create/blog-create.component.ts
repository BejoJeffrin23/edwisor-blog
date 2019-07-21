import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import{ActivatedRoute,Router} from '@angular/router';
import{ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

 public blogCategory: string="comedy,drama"
 public title: string;
 public description: string
 public bodyHtml: string
public possibleCategories:["comedy","drama"]  


  constructor(public toastr:ToastrService, public httpservice:HttpServiceService,public _route:ActivatedRoute,public router:Router) { }

  ngOnInit() {
  }
  public createBlog():any{
    let blogData={
      title:this.title,
      description:this.description,
      blogBody:this.bodyHtml,
      category:this.blogCategory
    }
    console.log(blogData)
    this.httpservice.create(blogData).subscribe(
   data=>{
     console.log('blog created')
     console.log(data);
     this.toastr.success('blog posted','Success')
     
     setTimeout(()=>{
     this.router.navigate(['/view',data.data.blogId])
      },3000 )
    },
   error=>{
     console.log("error in blog")
     console.log(error.errorMessage)
   })}

}
