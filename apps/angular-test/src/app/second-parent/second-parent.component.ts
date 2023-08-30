import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'angular-test-second-parent',
  templateUrl: './second-parent.component.html',
  styleUrls: ['./second-parent.component.scss'],
})
export class SecondParentComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('SecondParentComponent ngOnInit');
  }

  navigate(path: string): void {
    this.router.navigate([path]);
  }
}
