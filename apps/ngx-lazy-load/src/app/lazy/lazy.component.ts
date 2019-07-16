import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-lazy-load-lazy',
  template: `
    <p>{{ title }}lazy works!</p>
  `,
  styles: []
})
export class LazyComponent implements OnInit {
  title: string;
  constructor() {}

  ngOnInit() {}
}
