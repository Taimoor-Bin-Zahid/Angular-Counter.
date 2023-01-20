import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'counter';
  count=0;
  counter(type:string)
  {
    type=='add'?  this.count++:this.count--;
  }
  nwcont=0;
  newCounter(type:string){
    type=='add'? this.nwcont++:this.nwcont--;
  }
}
