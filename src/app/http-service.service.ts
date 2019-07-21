import { Injectable } from '@angular/core';
import{HttpClient,HttpErrorResponse} from '@angular/common/http';
import{Observable} from 'rxjs';
import{tap,catchError,map,finalize} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  public baseUrl="https://blogapp.edwisor.com/api/v1/blogs";
  public token='?authToken=MjQyZGUxMThjYTIzYTFhODc4NmVkNzQ0ZDI2ZWNkODE4Y2RiNTcxNDdlMjdlNTJkNDE1ZTUxMDM1OGQ2NTI1ZGI5MmYwZWEzOWYxYzI5YmMwOGJlMGMzZWY1NzAxYTk1MzdlZDQ1ZDM0ZTY4ZTliZjUxMGNmY2E4ZjRiMTkyN2RkOQ=='

  constructor(public _http:HttpClient) {
    console.log('http service called')
   }

   public getall():any{
let all=this._http.get(this.baseUrl+`/all${this.token}`)
console.log(all)
return all;
   }
   public getsingle(currentBlogId):any{
    let one=this._http.get(this.baseUrl+'/view/'+`${currentBlogId}${this.token}`)
    return one
   }
   public create(blogdata):any{
     let a=this._http.post(this.baseUrl+'/create/'+`${this.token}`,blogdata)
     return a;
   }
   public delete(blogId):any{
    let a=this._http.post(this.baseUrl+'/'+`${blogId}`+'/delete'+`${this.token}`,blogId)
    return a;
  }
  public edit(blogId,blogdata):any{
    let b=(this.baseUrl+'/'+`${blogId}`+'/edit'+`${this.token}`)
    console.log(b)
    let a=this._http.put(this.baseUrl+'/'+`${blogId}`+'/edit'+`${this.token}`,blogdata)
 
    return a;
    
  }
}

