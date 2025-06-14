import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {
counter = 20;
  incrementBy(value:number){
    this.counter += 1;

  }
    discrementBy(value:number){
    this.counter -= 1;

  }

      reset(value:number){
    this.counter = 0;

  }

}
