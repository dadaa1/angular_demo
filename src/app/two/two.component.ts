import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
//import { LoggerService } from '../logger.service.ts';
@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  name:String="hh";
  @Input() num:number=0;
  @Output() onVoted = new EventEmitter<boolean>();
  constructor() { 

  }

  ngOnInit() {
    console.log(this.num)
  }
  dian(){
  	alert("aaa")
  }
  add(){
    this.num++;
    console.log(this.name)
  }
  vote(agreed: boolean) {
    this.onVoted.emit(agreed);
  }
  hh(a:number,b:number,c:number){
    console.log(a+b+c);
  }

}
