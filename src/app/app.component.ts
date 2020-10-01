import { Component } from '@angular/core';


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
  public title="sastra";
  public wifi:any;
  public airplane:any;
  public tower:any;
  public hotspot:any;
  public darkmode:any;
  public location:any;
  public battery:any;
  public colore:any;n
  air(){
    this.wifi=!this.wifi;
    this.tower=!this.tower;
    this.hotspot=!this.hotspot;
    this.colore="black";
  }
  


  
}
