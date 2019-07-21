import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router'
import{ HttpServiceService} from '../http-service.service';
import{ ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css'],
  providers:[Location]
})
export class BlogEditComponent implements OnInit {
public currentBlog;
public possibleCategories=['drama,comedy,action']
  constructor( private blogHttpService:HttpServiceService,private _route:ActivatedRoute,private router:Router,private toastr:ToastrService) {}

  ngOnInit() {
    let myBlogId = this._route.snapshot.paramMap.get('id');
    console.log(myBlogId)
    this.currentBlog=this.blogHttpService.getsingle(myBlogId).subscribe(
      data =>{
        console.log(data)
        this.currentBlog=data['data'];
        console.log(this.currentBlog)
      }
    );
    
  }
  public editBlog(){
    this.blogHttpService.edit(this.currentBlog.blogId,this.currentBlog).subscribe(
      data=>{
        console.log('blog created')
        console.log(data);
        this.toastr.success('blog posted','Success')
        
        setTimeout(()=>{
        this.router.navigate(['/view',this.currentBlog.blogId])
         },2000 )
       },
      error=>{
        console.log("error in blog")
        console.log(error.errorMessage)
      })
  }
 

}
