import { EventEmitter, Component, OnInit, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  @Input() innerMenuItems: Array<string>;
  @Input() light: boolean = false;
  @Output() openDialgEmit = new EventEmitter();

  selStr: string;

  constructor() { }
  
  ngOnInit() {}

  openDialog(componentName):void {
    console.log(componentName);
    this.openDialgEmit.emit(componentName);
  }

}
