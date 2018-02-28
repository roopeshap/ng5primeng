import { Component, OnInit } from '@angular/core';
import {DataTableModule} from 'primeng/datatable';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  items: any[];

  constructor() {

    this.items=[{id:1,name:"name"}];

   }

  ngOnInit() {


  }

}
