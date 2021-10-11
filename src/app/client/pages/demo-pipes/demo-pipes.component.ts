import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-pipes',
  templateUrl: './demo-pipes.component.html',
  styleUrls: ['./demo-pipes.component.scss']
})
export class DemoPipesComponent implements OnInit {
  date = '2010-02-02T00:00:00';
  text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ducimus mollitia consequatur blanditiis distinctio itaque qui eaque sequi aut suscipit?';

  constructor() { }

  ngOnInit(): void {
  }

}
