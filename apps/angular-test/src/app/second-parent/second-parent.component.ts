import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-test-second-parent',
  templateUrl: './second-parent.component.html',
  styleUrls: ['./second-parent.component.scss'],
})
export class SecondParentComponent implements OnInit {
  ngOnInit(): void {
    console.log('SecondParentComponent ngOnInit');
  }
}
