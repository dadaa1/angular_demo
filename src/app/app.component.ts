import { Component} from '@angular/core';
import {Http} from '@angular/http';
import {LoggleService} from './loggle.service'
import 'rxjs/add/operator/toPromise';
import { TwoComponent } from "./two/two.component"
export class Hero {
	id:number;
	name:string;
}
const HEROES: Hero[] = [
  {id:1,name:'我是被隐藏的' },
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggleService]
})

export class AppComponent {
  title:string= 'Hello Angular2!';
  heros=HEROES;
  count:number=5;
  prp:String="奇数";
  xxx:any='XXX';
  isShow:boolean=true;
  constructor(private http:Http,
    private logger:LoggleService){
}
  onSelect(hero:Hero){
  	console.log(hero.id);
    this.title = hero.name;
    this.logger.log(this.title);
  }
  onVoted(agreed: boolean) {
    this.prp=agreed?"奇数":"偶数";
  }
  get() {
    this.http.get('http://guodashan.me:3000/users')
    .toPromise()
    .then(response => {
      this.xxx= response.text();
      console.log(response)
    })
    .catch((e)=>{
      console.log(e);
    });
  }
}
