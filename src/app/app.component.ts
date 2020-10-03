import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl:"./app.component.html",
  styles: [`div{
    background-color:green;
    display:flex;
    flex-wrap:wrap;
    flex:25%;
  }
  div button{
    width:20%;
    margin:15px 5%;
    height:40px;
    border:1px solid black;
  }
  
  `]
})
export class AppComponent {
  userForm:FormGroup;

   ngOnInit(){
       this.userForm=new FormGroup({
       associateName:new FormControl("heyyy"),
       id:new FormControl("12")
    })
  }

  


  
}
