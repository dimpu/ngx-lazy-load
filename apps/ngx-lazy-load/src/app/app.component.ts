import {
  Component,
  ViewChild,
  ElementRef,
  Injector,
  ComponentFactoryResolver
} from '@angular/core';

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
  endsnippet;
  loadLazy = async () => {
    const LazyComponent = await import('./lazy/lazy.component').then(
      c => c.LazyComponent
    );

    // create element
    const lazy = document.createElement('ngx-lazy-load-lazy');
    // create factory for the componente
    const factory = this._compFact.resolveComponentFactory(LazyComponent);

    // create component reference
    const LazyCompRef = factory.create(this.injector, [], lazy);
    // LazyCompRef.instance.title = 'wow!!!';

    this.viewRef.nativeElement.appendChild(lazy);
  };
}
