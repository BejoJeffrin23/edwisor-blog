import { Component, OnInit } from '@angular/core';
import{HttpServiceService} from '../http-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public allBlogs;
  constructor(public httpservice:HttpServiceService) { }

  ngOnInit() {
this.allBlogs=this.httpservice.getall().subscribe(
  data=>{
    console.log(data)
    this.allBlogs=data['data']
  },
  error=>{
    console.log('error')
    console.log(error.errorMessage)
  }
)
console.log(this.allBlogs)
  }

}
