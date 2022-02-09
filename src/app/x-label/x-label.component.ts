import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-x-label',
  templateUrl: './x-label.component.html',
  styleUrls: ['./x-label.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XLabelComponent implements OnInit,  OnDestroy{

  @Input() public model : any;
  @Input() public parent : any;
  
  constructor() {
    console.log("xlabel constructor");
  }

  ngOnInit(): void {
    console.log("xlabel ngOnInit");
  }

  ngOnDestroy(): void {
    console.log("xlabel ngOnDestroy");
  }
  public getRandomColor() {

    console.log("eval label");

    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
