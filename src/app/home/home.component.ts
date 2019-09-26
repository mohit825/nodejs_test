import { Component, OnInit, AfterContentInit, AfterContentChecked } from '@angular/core';
import { UserService } from '../src/services/user.service';
import { JsonPipe } from '@angular/common';
import { parse } from 'url';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService , private router:Router) { }
  formData : any;
  ngOnInit(){



  }

  formValueParent(e){
    console.log(e, "e");
    this.formData = e;
    this.x();
  }

  x(){
    console.log(this.formData , "this is my data");
    console.log(this.formData.value.userId , "this is my data")
    console.log(this.formData.value.userName , "this is my data")
  }

  dataFromServer(){

    this.userService.getDataFromServer().subscribe((data)=>{
      let x= JSON.stringify(data)
      console.log(x);
      console.log(data);

      this.router.navigate([`http://localhost:9000`]).then((x)=>{
        console.log(x , 'x');
      }).catch((x)=>{
        console.log(x , 'x');
      })
    })
  }

  createDb(){
    this.userService.createDb().subscribe((data)=>{
      console.log(data);
    });
  }

  getAllData(){
    // this.userService.getAllData().subscribe((data)=>{
    //   console.log(data, `data from SQl`);
    // })

    this.userService.getAllData().subscribe((data=>{
      console.log(data)
    }))
  }

}
