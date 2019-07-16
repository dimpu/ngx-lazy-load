import {NgModule, Injector} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyComponent} from './lazy.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [LazyComponent],
  imports: [CommonModule],
  entryComponents: [LazyComponent]
})
export class LazyModule {}
