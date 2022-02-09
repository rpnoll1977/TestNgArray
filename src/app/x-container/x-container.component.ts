import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-x-container',
  templateUrl: './x-container.component.html',
  styleUrls: ['./x-container.component.css']  ,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class XContainerComponent implements OnInit, OnDestroy {

  @Input() public model : any;
  @Input() public parent : any;

  constructor() {
    console.log("xcontainer constructor");
   }

  log(x:any):any{
    console.log(x);return x;
  }
  ngOnInit(): void {
    console.log("xcontainer oninit");
    console.log("model",this.model, typeof this.model);
  }

  ngOnDestroy(): void {
    console.log("xcontainer ondestroy");
  }

  
  tracker(index:number, item:any):any{            
    console.log("%c tracker","background-color:yellow", index, item);    
    // return JSON.stringify(item);
    return item;    
  }
}
