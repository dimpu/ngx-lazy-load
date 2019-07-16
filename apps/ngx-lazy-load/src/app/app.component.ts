import {
  Component,
  ViewChild,
  ElementRef,
  ComponentFactoryResolver,
  Injector
} from '@angular/core';
import {LazyComponent} from './lazy/lazy.component';

@Component({
  selector: 'ngx-lazy-load-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('viewRef', {static: false}) viewRef: ElementRef<HTMLElement>;
  constructor(
    public _compFact: ComponentFactoryResolver,
    public injector: Injector
  ) {}

  loadLazy = async () => {
    await import('./lazy/lazy.module').then(m => m.LazyModule);

    const LazyModule = import('./lazy/lazy.module').then(m => m.LazyModule);
    // create element
    const lazy = document.createElement('ngx-lazy-load-demo-lazy');
    // create factory for the componente
    const factory = this._compFact.resolveComponentFactory(LazyComponent);

    // create component reference
    const LazyCompRef = factory.create(this.injector, [], lazy);
    // LazyCompRef.instance.title = 'dimpu';

    this.viewRef.nativeElement.appendChild(lazy);
  };
}
