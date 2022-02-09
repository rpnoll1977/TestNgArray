import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-x-root',
  templateUrl: './x-root.component.html',
  styleUrls: ['./x-root.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XRootComponent implements OnInit {

  public model : any = {
    id:"container1",
    type:"c",
    controls: [
      {
        type: "c",
        id:"container2",
        controls: [
          {id:"label1", type:"l"},
          {id:"label2", type:"l"}
        ]
      }      
    ]
  };
  
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    console.log("test");
    var newModel = {
      ...this.model, 
      controls: [
        {
          type: "c",
          id:"container2",
          controls: [
            ...this.model.controls[0].controls,
            {id:"labelX", type:"l"},  
          ]      
        }
      ]
    }
    console.log(newModel);
    this.model = newModel;
  }

}

